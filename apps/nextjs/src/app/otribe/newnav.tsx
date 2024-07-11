'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence } from 'framer-motion'
import { useSetAtom } from 'jotai/react'

import type { About, Tab } from '~/data'
import Floating from '~/components/floating'
import Hover from '~/components/hover'
import NavItem from '~/components/nav-item'
import ThemeToggle from '~/components/theme-toggle'
import { aboutComponents, tabs } from '~/data'
import { aboutAtom, tabAtom } from '~/store'

const Nav = () => {
  const [active, setActive] = useState<React.ReactNode | null>(null),
    [hover, setHover] = useState<number | null>(null),
    setAbout = useSetAtom(aboutAtom),
    setTab = useSetAtom(tabAtom)
  return (
    <Floating className='top-2 mx-auto max-w-fit rounded-full border px-2 backdrop-blur-md backdrop-brightness-[5] backdrop-contrast-50 transition-all duration-500 hover:shadow-lg dark:border-stone-600 dark:backdrop-brightness-50 dark:backdrop-contrast-100 dark:hover:shadow-xl dark:hover:shadow-stone-800'>
      <nav className='relative flex items-center gap-32' onMouseLeave={() => setActive(null)}>
        <Image
          alt=''
          className='ml-3 cursor-pointer invert transition-all duration-500 dark:invert-0'
          height={150}
          onClick={() => setTab(undefined)}
          src='/otribe/brand.svg'
          width={150}
        />
        <div className='flex'>
          {tabs.map((tab, i) =>
            tab === 'About' ? (
              <NavItem
                active={active}
                item={tab}
                key={i}
                onClick={() => setTab(tab)}
                setActive={setActive}>
                <div className='flex flex-col p-1'>
                  {Object.keys(aboutComponents).map((item, _i) => (
                    <div
                      className='relative text-left'
                      key={_i}
                      onMouseEnter={() => setHover(_i)}
                      onMouseLeave={() => setHover(null)}>
                      <AnimatePresence>
                        {hover === _i && (
                          <Hover className='absolute -z-10 size-full rounded-xl bg-stone-200 dark:bg-muted' />
                        )}
                      </AnimatePresence>
                      <p
                        className='cursor-pointer rounded-xl px-3 py-2'
                        onClick={() => setAbout(item as About)}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </NavItem>
            ) : (
              <NavItem
                active={active}
                item={tab}
                key={i}
                onClick={() => setTab(tab as Tab)}
                setActive={setActive}
              />
            )
          )}
        </div>
        <ThemeToggle />
      </nav>
    </Floating>
  )
}

export default Nav
