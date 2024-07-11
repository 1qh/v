'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronsDown, Github, Menu } from 'lucide-react'

import { Button } from '@a/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@a/ui/navigation-menu'
import { Separator } from '@a/ui/separator'
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@a/ui/sheet'

import ThemeToggle from '~/components/theme-toggle'

interface RouteProps {
  href: string
  label: string
}

interface FeatureProps {
  description: string
  title: string
}

const routeList: RouteProps[] = [
    {
      href: '#testimonials',
      label: 'Testimonials'
    },
    {
      href: '#team',
      label: 'Team'
    },
    {
      href: '#contact',
      label: 'Contact'
    },
    {
      href: '#faq',
      label: 'FAQ'
    }
  ],
  featureList: FeatureProps[] = [
    {
      description: 'Highlight how your product solves user problems.',
      title: 'Showcase Your Value '
    },
    {
      description: 'Leverages social proof elements to establish trust and credibility.',
      title: 'Build Trust'
    },
    {
      description: 'Make your lead capture form visually appealing and strategically.',
      title: 'Capture Leads'
    }
  ],
  Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <header className='sticky top-5 z-40 mx-auto flex w-[90%] items-center justify-between rounded-2xl border border-secondary bg-card/15 p-2 shadow-inner md:w-[70%] lg:w-3/4 lg:max-w-screen-xl'>
        <Link className='flex items-center text-lg font-bold' href='/'>
          <ChevronsDown className='mr-2 size-9 rounded-lg border border-secondary bg-gradient-to-tr from-primary via-primary/70 to-primary text-white' />
          Shadcn
        </Link>
        {/* <!-- Mobile --> */}
        <div className='flex items-center lg:hidden'>
          <Sheet onOpenChange={setIsOpen} open={isOpen}>
            <SheetTrigger asChild>
              <Menu className='cursor-pointer lg:hidden' onClick={() => setIsOpen(!isOpen)} />
            </SheetTrigger>

            <SheetContent
              className='flex flex-col justify-between rounded-r-2xl border-secondary bg-card'
              side='left'>
              <div>
                <SheetHeader className='mb-4 ml-4'>
                  <SheetTitle className='flex items-center'>
                    <Link className='flex items-center' href='/'>
                      <ChevronsDown className='mr-2 size-9 rounded-lg border border-secondary bg-gradient-to-tr from-primary via-primary/70 to-primary text-white' />
                      Shadcn
                    </Link>
                  </SheetTitle>
                </SheetHeader>

                <div className='flex flex-col gap-2'>
                  {routeList.map(({ href, label }) => (
                    <Button
                      asChild
                      className='justify-start text-base'
                      key={href}
                      onClick={() => setIsOpen(false)}
                      variant='ghost'>
                      <Link href={href}>{label}</Link>
                    </Button>
                  ))}
                </div>
              </div>

              <SheetFooter className='flex-col items-start justify-start sm:flex-col'>
                <Separator className='mb-2' />

                <ThemeToggle />
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>

        {/* <!-- Desktop --> */}
        <NavigationMenu className='mx-auto hidden lg:block'>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className='bg-card text-base'>Features</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className='grid w-[600px] grid-cols-2 gap-5 p-4'>
                  <Image
                    alt='RadixLogo'
                    className='size-full rounded-md object-cover'
                    height={600}
                    src='https://avatars.githubusercontent.com/u/75042455?v=4'
                    width={600}
                  />
                  <ul className='flex flex-col gap-2'>
                    {featureList.map(({ description, title }) => (
                      <li className='rounded-md p-3 text-sm hover:bg-muted' key={title}>
                        <p className='mb-1 font-semibold leading-none text-foreground'>{title}</p>
                        <p className='line-clamp-2 text-muted-foreground'>{description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              {routeList.map(({ href, label }) => (
                <NavigationMenuLink asChild key={href}>
                  <Link className='px-2 text-base' href={href}>
                    {label}
                  </Link>
                </NavigationMenuLink>
              ))}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className='hidden lg:flex'>
          <ThemeToggle />

          <Button aria-label='View on GitHub' asChild size='sm' variant='ghost'>
            <Link
              aria-label='View on GitHub'
              href='https://github.com/nobruf/shadcn-landing-page.git'
              target='_blank'>
              <Github className='size-5' />
            </Link>
          </Button>
        </div>
      </header>
    )
  }

export default Navbar
