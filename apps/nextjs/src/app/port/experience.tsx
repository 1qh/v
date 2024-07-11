import { cn } from '@a/ui'
import { Card, CardContent } from '@a/ui/card'

import MotionWrap from '~/components/motion-wrap'

interface Experience {
  readonly company: string
  readonly description?: string
  readonly duration: string
  readonly name: string
}

interface ExperienceCardProps extends Experience {
  readonly className?: string
}

const experiences: Experience[] = [
    {
      company: 'Acme Inc',
      description:
        'Building beautiful and functional websites using modern web technologies, focusing on performance, accessibility, and SEO-friendly design.',
      duration: '2022 - Present',
      name: 'Web Development'
    },
    {
      company: 'Creative Designs Ltd',
      description:
        'Creating delightful and intuitive user experiences, specializing in responsive design and user-centric methodologies.',
      duration: '2021 - 2022',
      name: 'UI/UX Design'
    },
    {
      company: 'DataTech Solutions',
      description:
        'Storing and organizing data efficiently, ensuring data integrity, and optimizing database queries for high traffic applications.',
      duration: '2020 - 2022',
      name: 'Database Management'
    },
    {
      company: 'Innovative Apps Inc',
      description:
        'Crafting engaging and scalable apps for smartphones and tablets, focusing on cross-platform development and native performance.',
      duration: '2019 - 2021',
      name: 'Mobile Development'
    }
  ],
  ExperienceCard = ({ className, company, description, duration, name }: ExperienceCardProps) => (
    <Card className={cn('border-none bg-transparent', className)}>
      <CardContent className='p-1'>
        <div className='flex items-baseline justify-between'>
          <h3 className='text-2xl font-semibold'>{company}</h3>
          <span className='text-sm font-medium'>{duration}</span>
        </div>
        <h4 className='mt-2 text-lg font-medium uppercase'>{name}</h4>
        <p className='mt-2'>{description}</p>
        <hr className='my-6 border-t border-border' />
      </CardContent>
    </Card>
  ),
  Experiences = () => (
    <MotionWrap className='w-full py-24 lg:py-32' id='experiences'>
      <div className='px-4 md:px-6'>
        <div className='grid gap-10 lg:grid-cols-2'>
          <div className='space-y-4'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none'>
              My Experience
            </h2>
            <p className='text-gray-500 dark:text-gray-400'>
              Here are some of my work experiences where I&apos;ve turned challenges into
              accomplishments, making things happen.
            </p>
          </div>
          <div className='grid gap-4'>
            {experiences.map((experience, index) => (
              <ExperienceCard
                company={experience.company}
                description={experience.description}
                duration={experience.duration}
                key={index}
                name={experience.name}
              />
            ))}
          </div>
        </div>
      </div>
    </MotionWrap>
  )

export default Experiences
