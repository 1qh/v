'use client'

import Autoplay from 'embla-carousel-autoplay'
import { Star } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@a/ui/avatar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@a/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@a/ui/carousel'

interface ReviewProps {
  comment: string
  image: string
  name: string
  rating: number
  userName: string
}

const reviewList: ReviewProps[] = [
    {
      comment:
        'Wow NextJs + Shadcn is awesome!. This template lets me change colors, fonts and images to match my brand identity. ',
      image: 'https://github.com/shadcn.png',
      name: 'John Doe',
      rating: 5.0,
      userName: 'Product Manager'
    },
    {
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. ',
      image: 'https://github.com/shadcn.png',
      name: 'Sophia Collins',
      rating: 4.8,
      userName: 'Cybersecurity Analyst'
    },

    {
      comment:
        'Lorem ipsum dolor sit amet,exercitation. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      image: 'https://github.com/shadcn.png',
      name: 'Adam Johnson',
      rating: 4.9,
      userName: 'Chief Technology Officer'
    },
    {
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod labore et dolore magna aliqua. Ut enim ad minim veniam.',
      image: 'https://github.com/shadcn.png',
      name: 'Ethan Parker',
      rating: 5.0,
      userName: 'Data Scientist'
    },
    {
      comment:
        'Lorem ipsum dolor sit amet, tempor incididunt  aliqua. Ut enim ad minim veniam, quis nostrud incididunt consectetur adipiscing elit.',
      image: 'https://github.com/shadcn.png',
      name: 'Ava Mitchell',
      rating: 5.0,
      userName: 'IT Project Manager'
    },
    {
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://github.com/shadcn.png',
      name: 'Isabella Reed',
      rating: 4.9,
      userName: 'DevOps Engineer'
    }
  ],
  TestimonialSection = () => (
    <section className='container py-24 sm:py-32' id='testimonials'>
      <div className='mb-8 text-center'>
        <h2 className='mb-2 text-center text-lg tracking-wider text-primary'>Testimonials</h2>
        <h2 className='mb-4 text-center text-3xl font-bold md:text-4xl'>
          Hear What Our 1000+ Clients Say
        </h2>
      </div>
      <Carousel
        className='relative mx-auto w-4/5 sm:w-[90%] lg:max-w-screen-xl'
        opts={{ align: 'start' }}
        plugins={[Autoplay({ delay: 3000 })]}>
        <CarouselContent>
          {reviewList.map(review => (
            <CarouselItem className='md:basis-1/2 lg:basis-1/3' key={review.name}>
              <Card className='bg-muted/50 dark:bg-card'>
                <CardContent className='pb-0 pt-6'>
                  <div className='flex gap-1 pb-6'>
                    <Star className='size-4 fill-primary text-primary' />
                    <Star className='size-4 fill-primary text-primary' />
                    <Star className='size-4 fill-primary text-primary' />
                    <Star className='size-4 fill-primary text-primary' />
                    <Star className='size-4 fill-primary text-primary' />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className='flex flex-row items-center gap-4'>
                    <Avatar>
                      <AvatarImage
                        alt='radix'
                        src='https://avatars.githubusercontent.com/u/75042455?v=4'
                      />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>
                    <div className='flex flex-col'>
                      <CardTitle className='text-lg'>{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
export default TestimonialSection
