'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { AnimatePresence } from 'framer-motion'
import { useSetAtom } from 'jotai/react'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@a/ui/accordion'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@a/ui/dropdown-menu'

import type { About, Tab } from '~/data'
import Floating from '~/components/floating'
import Hover from '~/components/hover'
import NavItem from '~/components/nav-item'
import { aboutComponents, tabs } from '~/data'
import { aboutAtom, tabAtom } from '~/store'

const Nav = () => {
  const [active, setActive] = useState<React.ReactNode | null>(null),
    [hover, setHover] = useState<number | null>(null),
    setAbout = useSetAtom(aboutAtom),
    setTab = useSetAtom(tabAtom)
  return (
    <Floating
      className='w-screen px-3 backdrop-blur-md backdrop-brightness-[5] backdrop-contrast-50 transition-all duration-500 hover:shadow-lg dark:border-stone-600 dark:backdrop-brightness-50 dark:backdrop-contrast-100 dark:hover:shadow-xl dark:hover:shadow-stone-800 lg:px-6'
      topClassName='bg-transparent text-white backdrop-filter-none hover:shadow-transparent dark:backdrop-filter-none'>
      <nav
        className='relative flex items-center justify-between'
        onMouseLeave={() => setActive(null)}>
        <Image
          alt=''
          className='my-3 w-48 cursor-pointer transition-all duration-500 lg:w-72'
          height={300}
          onClick={() => setTab(undefined)}
          src='/otribe/logo.svg'
          width={300}
        />
        <div className='hidden items-center gap-5 lg:flex'>
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
                        className='cursor-pointer rounded-xl px-3 py-2 text-foreground'
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
          <Link href='https://www.instagram.com/_otribe_/'>
            <Image alt='' height={32} src='/otribe/ig.svg' width={32} />
          </Link>
          <Link href='https://facebook.com/profile.php?id=100063735896326'>
            <Image alt='' height={32} src='/otribe/fb.svg' width={32} />
          </Link>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <HamburgerMenuIcon className='mr-3 block size-10 lg:hidden' />
          </DropdownMenuTrigger>
          <DropdownMenuContent className='mt-3 w-screen rounded-none border-none bg-transparent p-3 backdrop-blur-md backdrop-brightness-[0.2]'>
            <Accordion collapsible type='single'>
              <AccordionItem className='border-none' value='about'>
                <AccordionTrigger className='px-2 py-3 text-xl font-normal text-white hover:no-underline'>
                  About
                </AccordionTrigger>
                <AccordionContent className='p-0'>
                  {Object.keys(aboutComponents).map((item, i) => (
                    <DropdownMenuItem
                      className='py-3 pl-8 text-xl text-white'
                      key={i}
                      onClick={() => {
                        setTab('About')
                        setAbout(item as About)
                      }}>
                      {item}
                    </DropdownMenuItem>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {tabs.map(
              (tab, i) =>
                tab !== 'About' && (
                  <DropdownMenuItem
                    className='py-3 text-xl text-white'
                    key={i}
                    onClick={() => setTab(tab)}>
                    {tab}
                  </DropdownMenuItem>
                )
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </Floating>
  )
}

export default Nav
