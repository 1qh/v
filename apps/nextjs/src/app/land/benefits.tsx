import type { icons } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@a/ui/card'

import Icon from '~/components/icon'

interface BenefitsProps {
  description: string
  icon: string
  title: string
}

const benefitList: BenefitsProps[] = [
    {
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur dolores.',
      icon: 'Blocks',
      title: 'Build Brand Trust'
    },
    {
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam, natus consectetur.',
      icon: 'LineChart',
      title: 'More Leads'
    },
    {
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus consectetur. A odio velit cum aliquam',
      icon: 'Wallet',
      title: 'Higher Conversions'
    },
    {
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur dolores.',
      icon: 'Sparkle',
      title: 'Test Marketing Ideas'
    }
  ],
  BenefitsSection = () => (
    <section className='container py-24 sm:py-32' id='benefits'>
      <div className='grid place-items-center lg:grid-cols-2 lg:gap-24'>
        <div>
          <h2 className='mb-2 text-lg tracking-wider text-primary'>Benefits</h2>

          <h2 className='mb-4 text-3xl font-bold md:text-4xl'>Your Shortcut to Success</h2>
          <p className='mb-8 text-xl text-muted-foreground'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non ducimus reprehenderit
            architecto rerum similique facere odit deleniti necessitatibus quo quae.
          </p>
        </div>

        <div className='grid w-full gap-4 lg:grid-cols-2'>
          {benefitList.map(({ description, icon, title }, index) => (
            <Card
              className='group/number bg-muted/50 transition-all delay-75 hover:bg-background dark:bg-card'
              key={title}>
              <CardHeader>
                <div className='flex justify-between'>
                  <Icon
                    className='mb-6 text-primary'
                    color='hsl(var(--primary))'
                    name={icon as keyof typeof icons}
                    size={32}
                  />
                  <span className='text-5xl font-medium text-muted-foreground/15 transition-all delay-75 group-hover/number:text-muted-foreground/30'>
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className='text-muted-foreground'>{description}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
export default BenefitsSection
