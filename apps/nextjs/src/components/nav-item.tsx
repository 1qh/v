import { motion } from 'framer-motion'

import { cn } from '@a/ui'

const transition = {
    damping: 10,
    mass: 0.5,
    restDelta: 0.001,
    restSpeed: 0.001,
    stiffness: 100,
    type: 'spring'
  },
  NavItem = ({
    active,
    children,
    item,
    onClick,
    setActive
  }: {
    readonly active: React.ReactNode | null
    readonly children?: React.ReactNode
    readonly item: React.ReactNode
    readonly onClick?: () => void
    readonly setActive: (item: React.ReactNode) => void
  }) =>
    motion.p &&
    motion.div && (
      <div className='relative' onClick={onClick} onMouseEnter={() => setActive(item)}>
        <motion.p
          className={cn(
            active === item && 'opacity-100',
            typeof item === 'string' &&
              'cursor-pointer px-5 py-3 text-xl opacity-90 duration-300 hover:font-semibold hover:tracking-normal hover:opacity-100'
          )}
          transition={{ duration: 0.3 }}>
          {item}
        </motion.p>
        {active ? (
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.7 }}
            transition={transition}>
            {active === item && (
              <div className='absolute left-1/2 -translate-x-1/2 pt-4'>
                <motion.div
                  className='overflow-hidden rounded-2xl border border-black/[0.2] bg-background shadow-xl backdrop-blur-sm dark:border-white/[0.2]'
                  layoutId='active'
                  transition={transition}>
                  <motion.div className='h-full w-max' layout>
                    {children}
                  </motion.div>
                </motion.div>
              </div>
            )}
          </motion.div>
        ) : null}
      </div>
    )

export default NavItem
