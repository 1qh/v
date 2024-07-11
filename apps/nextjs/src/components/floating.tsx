'use client'

import { useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'

import { cn } from '@a/ui'

const Floating = ({
  children,
  className,
  topClassName
}: {
  readonly children: React.ReactNode
  readonly className?: string
  readonly topClassName?: string
}) => {
  const { scrollY, scrollYProgress } = useScroll(),
    [visible, setVisible] = useState(true),
    [haveShadow, setHaveShadow] = useState(false)

  useMotionValueEvent(scrollYProgress, 'change', current => {
    const direction = current - (scrollYProgress.getPrevious() ?? 0)

    if (direction < 0) {
      setVisible(true)
      setHaveShadow(true)
    } else {
      setVisible(false)
    }
    if (scrollY.get() === 0) {
      setVisible(true)
      setHaveShadow(false)
    }
  })
  return (
    motion.div && (
      <AnimatePresence mode='wait'>
        <motion.div
          animate={{ y: visible ? 0 : -100 }}
          className={cn(
            'fixed inset-x-0 z-50',
            haveShadow
              ? 'shadow-lg drop-shadow-lg dark:shadow-lg dark:shadow-stone-800'
              : topClassName,
            className
          )}
          transition={{ duration: 0 }}>
          {children}
        </motion.div>
      </AnimatePresence>
    )
  )
}
export default Floating
