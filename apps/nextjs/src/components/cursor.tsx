'use client'

import type { MotionValue, SpringOptions } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

import { cn } from '@a/ui'

interface MouseMoveEvent {
  clientX: number
  clientY: number
}

export default function Cursor() {
  const [isPressed, setIsPressed] = useState<boolean>(false),
    cursor = useRef<HTMLDivElement>(null),
    cursorSize = isPressed ? 18 : 12,
    [isVisible, setIsVisible] = useState(false),
    mouse: { x: MotionValue<number>; y: MotionValue<number> } = {
      x: useMotionValue(0),
      y: useMotionValue(0)
    },
    smoothOptions: SpringOptions = {
      damping: 20,
      mass: 0.5,
      stiffness: 300
    },
    smoothMouse = {
      x: useSpring(mouse.x, smoothOptions),
      y: useSpring(mouse.y, smoothOptions)
    },
    manageResize = () => {
      const isFinePointer = window.matchMedia('(pointer: fine)').matches
      if (!isFinePointer) {
        setIsVisible(false)
      }
    },
    manageMouseMove = (e: MouseMoveEvent) => {
      const isFinePointer = window.matchMedia('(pointer: fine)').matches
      if (!isFinePointer) {
        setIsVisible(false)
        return
      }
      if (!isVisible) {
        setIsVisible(true)
      }

      const { clientX, clientY } = e
      mouse.x.set(clientX - cursorSize / 2)
      mouse.y.set(clientY - cursorSize / 2)
    },
    manageMouseLeave = () => setIsVisible(false),
    handleMouseUp = () => setIsPressed(false),
    handleMouseDown = (e: MouseEvent) => {
      if (e.button === 2) {
        return
      }
      setIsPressed(true)
    }

  useEffect(() => {
    window.addEventListener('resize', manageResize)
    document.body.addEventListener('mouseleave', manageMouseLeave, { passive: true })
    window.addEventListener('mousemove', manageMouseMove, { passive: true })
    window.addEventListener('mousedown', handleMouseDown, { passive: true })
    window.addEventListener('mouseup', handleMouseUp, { passive: true })
    return () => {
      window.removeEventListener('resize', manageResize)
      window.removeEventListener('mouseleave', manageMouseLeave)
      window.removeEventListener('mousemove', manageMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  const template = ({
    rotate,
    scaleX,
    scaleY
  }: {
    rotate: number
    scaleX: number
    scaleY: number
  }) => `rotate(${rotate}deg) scaleX(${scaleX}) scaleY(${scaleY})`

  return (
    motion.div && (
      <motion.div
        animate={{ height: cursorSize, width: cursorSize }}
        className={cn(
          'pointer-events-none fixed size-3 rounded-full bg-foreground',
          isVisible ? 'opacity-100' : 'opacity-0'
        )}
        ref={cursor}
        style={{ left: smoothMouse.x, scaleX: mouse.x, scaleY: mouse.y, top: smoothMouse.y }}
        transformTemplate={template}
      />
    )
  )
}
