"use client"

import { useEffect, useRef } from "react"

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Circuit node class
    class Node {
      x: number
      y: number
      size: number
      color: string
      pulseSpeed: number
      pulseSize: number
      maxSize: number
      connections: Node[]
      alpha: number
      pulseDirection: number

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.size = Math.random() * 1.5 + 0.5
        this.color = Math.random() > 0.3 ? "#00a2ff" : "#c9a227"
        this.pulseSpeed = Math.random() * 0.02 + 0.01
        this.pulseSize = this.size
        this.maxSize = this.size + Math.random() * 1.5
        this.connections = []
        this.alpha = Math.random() * 0.5 + 0.1
        this.pulseDirection = Math.random() > 0.5 ? 1 : -1
      }

      update() {
        // Pulse effect
        this.pulseSize += this.pulseSpeed * this.pulseDirection
        if (this.pulseSize > this.maxSize || this.pulseSize < this.size) {
          this.pulseDirection *= -1
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.pulseSize, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.globalAlpha = this.alpha
        ctx.fill()
        ctx.globalAlpha = 1
      }

      connectTo(node: Node) {
        if (!this.connections.includes(node)) {
          this.connections.push(node)
        }
      }

      drawConnections(ctx: CanvasRenderingContext2D) {
        this.connections.forEach((node) => {
          ctx.beginPath()
          ctx.moveTo(this.x, this.y)
          ctx.lineTo(node.x, node.y)
          ctx.strokeStyle = this.color
          ctx.globalAlpha = 0.1
          ctx.lineWidth = 0.5
          ctx.stroke()
          ctx.globalAlpha = 1
        })
      }
    }

    // Create nodes
    const nodes: Node[] = []
    const nodeCount = Math.floor((canvas.width * canvas.height) / 15000)

    for (let i = 0; i < nodeCount; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      nodes.push(new Node(x, y))
    }

    // Connect nodes
    nodes.forEach((node) => {
      nodes.forEach((otherNode) => {
        if (node !== otherNode) {
          const dx = node.x - otherNode.x
          const dy = node.y - otherNode.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < 150) {
            node.connectTo(otherNode)
          }
        }
      })
    })

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw nodes
      nodes.forEach((node) => {
        node.update()
        node.draw(ctx)
      })

      // Draw connections
      nodes.forEach((node) => {
        node.drawConnections(ctx)
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-20" />
}
