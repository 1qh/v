'use client'

import type { MotionProps } from 'framer-motion'
import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

import { cn } from '@a/ui'

type MotionWrapProps = {
  children: ReactNode
  className?: string
  id?: string
} & MotionProps

const MotionWrap: React.FC<MotionWrapProps> = ({ children, className, ...props }) =>
  motion.section && (
    <motion.section
      className={cn(className, 'app__flex')}
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: [0, 0, 1], y: [100, 50, 0] }}
      {...props}>
      {children}
    </motion.section>
  )

export default MotionWrap
