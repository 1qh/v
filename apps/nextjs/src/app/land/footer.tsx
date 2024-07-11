import Link from 'next/link'
import { ChevronsDownIcon } from 'lucide-react'

import { Separator } from '@a/ui/separator'

const FooterSection = () => (
  <footer className='container py-24 sm:py-32' id='footer'>
    <div className='rounded-2xl border border-secondary bg-card p-10'>
      <div className='grid grid-cols-2 gap-x-12 gap-y-8 md:grid-cols-4 xl:grid-cols-6'>
        <div className='col-span-full xl:col-span-2'>
          <Link className='flex items-center font-bold' href='#'>
            <ChevronsDownIcon className='mr-2 size-9 rounded-lg border border-secondary bg-gradient-to-tr from-primary via-primary/70 to-primary' />

            <h3 className='text-2xl'>Shadcn</h3>
          </Link>
        </div>

        <div className='flex flex-col gap-2'>
          <h3 className='text-lg font-bold'>Contact</h3>
          <div>
            <Link className='opacity-60 hover:opacity-100' href='#'>
              Github
            </Link>
          </div>

          <div>
            <Link className='opacity-60 hover:opacity-100' href='#'>
              Twitter
            </Link>
          </div>

          <div>
            <Link className='opacity-60 hover:opacity-100' href='#'>
              Instagram
            </Link>
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <h3 className='text-lg font-bold'>Platforms</h3>
          <div>
            <Link className='opacity-60 hover:opacity-100' href='#'>
              iOS
            </Link>
          </div>

          <div>
            <Link className='opacity-60 hover:opacity-100' href='#'>
              Android
            </Link>
          </div>

          <div>
            <Link className='opacity-60 hover:opacity-100' href='#'>
              Web
            </Link>
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <h3 className='text-lg font-bold'>Help</h3>
          <div>
            <Link className='opacity-60 hover:opacity-100' href='#'>
              Contact Us
            </Link>
          </div>

          <div>
            <Link className='opacity-60 hover:opacity-100' href='#'>
              FAQ
            </Link>
          </div>

          <div>
            <Link className='opacity-60 hover:opacity-100' href='#'>
              Feedback
            </Link>
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <h3 className='text-lg font-bold'>Socials</h3>
          <div>
            <Link className='opacity-60 hover:opacity-100' href='#'>
              Twitch
            </Link>
          </div>

          <div>
            <Link className='opacity-60 hover:opacity-100' href='#'>
              Discord
            </Link>
          </div>

          <div>
            <Link className='opacity-60 hover:opacity-100' href='#'>
              Dribbble
            </Link>
          </div>
        </div>
      </div>

      <Separator className='my-6' />
      <section className=''>
        <h3 className=''>
          &copy; 2024 Designed and developed by
          <Link
            className='ml-1 border-primary text-primary transition-all hover:border-b-2'
            href='https://github.com/leoMirandaa'
            target='_blank'>
            Leo Miranda
          </Link>
        </h3>
      </section>
    </div>
  </footer>
)

export default FooterSection
