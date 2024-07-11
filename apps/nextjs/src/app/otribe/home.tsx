import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import { useSetAtom } from 'jotai/react'

import { Button } from '@a/ui/button'
import { Card } from '@a/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@a/ui/carousel'
import { Drawer, DrawerContent, DrawerTrigger } from '@a/ui/drawer'

import MotionWrap from '~/components/motion-wrap'
import Reveal from '~/components/reveal'
import { testimonials } from '~/data'
import { aboutAtom, tabAtom } from '~/store'

const Home = () => {
  const setAbout = useSetAtom(aboutAtom),
    setTab = useSetAtom(tabAtom)
  return (
    <>
      <div className='absolute left-1/2 top-52 flex w-full -translate-x-1/2 flex-col items-center gap-5 text-white lg:top-72 lg:gap-10'>
        <Image alt='' className='w-24 lg:w-48' height={200} src='/otribe/o.png' width={200} />
        <p className='text-balance text-center text-4xl font-bold lg:text-6xl'>
          Meditation and Mindfulness training
        </p>
        <p
          className='cursor-pointer rounded-xl border border-white px-2 py-1.5 text-lg font-medium transition-all duration-300 hover:border-transparent hover:backdrop-blur-lg hover:backdrop-brightness-200 hover:backdrop-contrast-75 lg:px-10 lg:py-3 lg:text-3xl'
          onClick={() => setTab('Services')}>
          Individuals, couples, families & teams
        </p>
      </div>
      <MotionWrap className='mx-auto max-w-screen-2xl py-24'>
        <div className='px-4 md:px-6'>
          <div className='grid gap-10'>
            <div className='flex w-full flex-col items-center justify-center gap-6 text-center lg:flex-row lg:justify-between lg:px-12 lg:text-left'>
              <Reveal>
                <p className='-mt-2 text-4xl font-bold leading-tight tracking-tighter text-[#587c5c] sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight'>
                  Testimonials
                </p>
              </Reveal>
              <Button
                className='rounded-xl py-6 text-lg transition-all duration-300 hover:-translate-y-0.5 hover:drop-shadow-xl'
                onClick={() => setTab('Testimonials')}
                variant='outline'>
                View all testimonials
              </Button>
            </div>
            <div className='flex items-center justify-center overflow-hidden lg:px-12'>
              <Carousel
                className='w-full'
                opts={{ align: 'start' }}
                plugins={[Autoplay({ delay: 3000 })]}>
                <CarouselContent>
                  {testimonials.map((t, i) => (
                    <CarouselItem className='cursor-pointer md:basis-1/2 lg:basis-1/3' key={i}>
                      <Drawer>
                        <DrawerTrigger asChild>
                          <Card className='size-full rounded-xl bg-muted/40 p-2'>
                            <Image
                              alt=''
                              className='h-64 w-full rounded-lg object-cover'
                              height={1000}
                              src={t.image}
                              width={1000}
                            />
                            <div className='p-2'>
                              <p className='my-2.5 line-clamp-1 text-xl font-semibold'>{t.name}</p>
                              <p className='line-clamp-3 text-foreground/70'>{t.content}</p>
                            </div>
                          </Card>
                        </DrawerTrigger>
                        <DrawerContent className='flex flex-row py-6'>
                          <Image
                            alt=''
                            className='aspect-[4/3] h-[600px] rounded-lg object-cover'
                            height={1000}
                            src={t.image}
                            width={1000}
                          />
                          <div className='mx-10'>
                            <p className='mb-5 mt-3 text-5xl font-semibold'>{t.name}</p>
                            <p className='text-xl text-foreground/70'>{t.content}</p>
                          </div>
                        </DrawerContent>
                      </Drawer>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </MotionWrap>
      <div className='relative'>
        <Image
          alt=''
          className='absolute -z-10 h-[500px] w-screen object-cover brightness-75 transition-all duration-1000 lg:h-[800px]'
          height={2000}
          src='/otribe/malcolm.png'
          width={2000}
        />
        <div className='mx-auto grid h-[500px] max-w-screen-xl text-white lg:h-[800px] lg:grid-cols-2'>
          <div className='my-auto flex flex-col px-5 lg:px-0'>
            <p className='my-3 text-center text-4xl font-bold lg:text-left lg:text-6xl'>
              Meet Malcolm
            </p>
            <p>
              Malcolm is a dedicated practitioner of Meditation and Mindfulness who is on a
              never-ending journey of learning, discovery, and personal growth. His passion is to
              share the art, joy, and incredible benefits of Meditation and Mindfulness with others,
              creating a safe and welcoming space for you to reconnect with the present moment and
              retrain your mind.
            </p>
            <Button
              className='mx-auto mt-12 w-fit rounded-xl border py-6 text-lg lg:mx-0'
              onClick={() => {
                setTab('About')
                setAbout('Meet Malcolm')
              }}
              variant='ghost'>
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
