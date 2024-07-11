'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

interface RevealProps {
  readonly children: React.ReactNode
  readonly width?: 'fit-content' | '100%'
}

const Reveal = ({ children, width = '100%' }: RevealProps) => {
  const ref = useRef(null),
    isInView = useInView(ref, { once: false }),
    mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      void mainControls.start('visible')
    } else {
      void mainControls.start('hidden')
    }
  }, [isInView])

  return (
    motion.div && (
      <div ref={ref} style={{ overflow: 'hidden', position: 'relative', width }}>
        <motion.div
          animate={mainControls}
          initial='hidden'
          transition={{ delay: 0.25, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 }
          }}>
          {children}
        </motion.div>
      </div>
    )
  )
}

export default Reveal
