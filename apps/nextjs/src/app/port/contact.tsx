import { GithubIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from 'lucide-react'

import { Button } from '@a/ui/button'

import MotionWrap from '~/components/motion-wrap'

const contact = {
    email: 'john@example.com',
    socials: {
      github: 'https://github.com/',
      linkedin: 'https://linkedin.com/',
      twitter: 'https://twitter.com/',
      youtube: 'https://youtube.com/'
    }
  },
  Contact = () => (
    <MotionWrap className='w-full py-24 lg:py-32' id='contact'>
      <div className='px-4 md:px-6'>
        <div className='grid gap-10 lg:grid-cols-2'>
          <div className='space-y-3'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
              Contact Me
            </h2>
            <p className='max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
              Have a question or want to work together?
            </p>
            <p className='text-muted-foreground'>
              Email:{' '}
              <a className='hover:underline' href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            </p>
            <div className='flex space-x-1'>
              {contact.socials.github ? (
                <Button asChild size='icon' variant='outline'>
                  <a href={contact.socials.youtube} rel='noreferrer' target='_blank'>
                    <YoutubeIcon className='size-4' />
                  </a>
                </Button>
              ) : null}
              {contact.socials.twitter ? (
                <Button asChild size='icon' variant='outline'>
                  <a href={contact.socials.twitter} rel='noreferrer' target='_blank'>
                    <TwitterIcon className='size-4' />
                  </a>
                </Button>
              ) : null}
              {contact.socials.github ? (
                <Button asChild size='icon' variant='outline'>
                  <a href={contact.socials.github} rel='noreferrer' target='_blank'>
                    <GithubIcon className='size-4' />
                  </a>
                </Button>
              ) : null}
              {contact.socials.linkedin ? (
                <Button asChild size='icon' variant='outline'>
                  <a href={contact.socials.linkedin} rel='noreferrer' target='_blank'>
                    <LinkedinIcon className='size-4' />
                  </a>
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </MotionWrap>
  )

export default Contact
