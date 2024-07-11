'use client'

import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'

import { cn } from '@a/ui'
import { Card, CardContent } from '@a/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@a/ui/carousel'

import MotionWrap from '~/components/motion-wrap'
import Reveal from '~/components/reveal'

interface Testimonial {
  readonly image?: string
  readonly name?: string
  readonly testimonial?: string
  readonly username?: string
}

interface TestimonialCardProps extends Testimonial {
  readonly className?: string
}
const testimonials: Testimonial[] = [
    {
      image: '/images/person/1.jpg',
      name: 'Jane Doe',
      testimonial:
        'Collaborating with John on this project was a fantastic experience. His dedication and expertise were invaluable.',
      username: 'janedoe'
    },
    {
      image: '/images/person/2.jpg',
      name: 'Emily Smith',
      testimonial:
        "John's work on the project was outstanding. His problem-solving skills and attention to detail greatly contributed to our success.",
      username: 'emilysmith'
    },
    {
      image: '/images/person/3.jpg',
      name: 'Michael Johnson',
      testimonial:
        "John's innovative approach and technical proficiency were key to the success of our project. Highly recommend working with him.",
      username: 'michaeljohnson'
    },
    {
      image: '/images/person/4.jpg',
      name: 'Sarah Williams',
      testimonial:
        'John has an exceptional ability to communicate complex ideas clearly. His contributions were crucial to the project’s success.',
      username: 'sarahwilliams'
    },
    {
      image: '/images/person/5.jpg',
      name: 'David Brown',
      testimonial:
        'Working with John was a pleasure. His professionalism and technical skills are top-notch. Highly recommend him for any project.',
      username: 'davidbrown'
    },
    {
      image: '/images/person/6.jpg',
      name: 'Jessica Taylor',
      testimonial:
        "John's creativity and problem-solving abilities were impressive. He played a key role in the project's success.",
      username: 'jessicataylor'
    }
  ],
  TestimonialCard = ({ className, image, name, testimonial, username }: TestimonialCardProps) => (
    <Card className={cn('size-full rounded-xl', 'bg-muted/40', className)}>
      <div className='flex items-center p-4'>
        <div className='size-12 overflow-hidden rounded-full border-2 border-white'>
          <Image
            alt={name ?? 'Anonymous'}
            className='aspect-square h-auto w-full rounded-full object-cover'
            height={40}
            src={image ?? '/placeholder.svg'}
            width={40}
          />
        </div>
        <div className='ml-4'>
          <p className='font-semibold'>{name ?? 'Anonymous'}</p>
          {username ? <p className='text-sm text-gray-500'>{username}</p> : null}
        </div>
      </div>
      <CardContent className='p-4'>
        <p className='text-sm leading-loose'>{testimonial ?? 'No testimonial provided.'}</p>
      </CardContent>
    </Card>
  ),
  Testimonials = () => (
    <MotionWrap className='w-full py-24 lg:py-32' id='testimonials'>
      <div className='px-4 md:px-6'>
        <div className='grid gap-10'>
          <div className='flex w-full flex-col items-center justify-center text-center lg:flex-row lg:justify-between lg:text-left'>
            <div className='flex flex-col items-center lg:items-start'>
              <Reveal>
                <h2 className='text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight'>
                  My
                </h2>
              </Reveal>
              <Reveal>
                <h2 className='-mt-2 text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight'>
                  Testimonials
                </h2>
              </Reveal>
            </div>
            <p className='mt-4 hidden text-gray-500 dark:text-gray-400 lg:mt-0 lg:block lg:w-[35%]'>
              Here are some of my testimonials where clients and colleagues share their experiences
              of working with me.
            </p>
          </div>
          <div className='flex items-center justify-center overflow-hidden lg:px-12'>
            <Carousel
              className='w-full'
              opts={{ align: 'start' }}
              plugins={[Autoplay({ delay: 3000 })]}>
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem className='md:basis-1/2 lg:basis-1/3' key={index}>
                    <div className='h-full p-1'>
                      <TestimonialCard
                        image={testimonial.image}
                        name={testimonial.name}
                        testimonial={testimonial.testimonial}
                        username={testimonial.username}
                      />
                    </div>
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
  )

export default Testimonials
