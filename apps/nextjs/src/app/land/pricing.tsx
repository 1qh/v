import { Check } from 'lucide-react'

import { Button } from '@a/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@a/ui/card'

enum PopularPlan {
  NO = 0,
  YES = 1
}

interface PlanProps {
  benefitList: string[]
  buttonText: string
  description: string
  popular: PopularPlan
  price: number
  title: string
}

const plans: PlanProps[] = [
    {
      benefitList: [
        '1 team member',
        '1 GB storage',
        'Upto 2 pages',
        'Community support',
        'AI assistance'
      ],
      buttonText: 'Start Free Trial',
      description: 'Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.',
      popular: 0,
      price: 0,
      title: 'Free'
    },
    {
      benefitList: [
        '4 team member',
        '8 GB storage',
        'Upto 6 pages',
        'Priority support',
        'AI assistance'
      ],
      buttonText: 'Get starterd',
      description: 'Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.',
      popular: 1,
      price: 45,
      title: 'Premium'
    },
    {
      benefitList: [
        '10 team member',
        '20 GB storage',
        'Upto 10 pages',
        'Phone & email support',
        'AI assistance'
      ],
      buttonText: 'Contact US',
      description: 'Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.',
      popular: 0,
      price: 120,
      title: 'Enterprise'
    }
  ],
  PricingSection = () => (
    <section className='container py-24 sm:py-32'>
      <h2 className='mb-2 text-center text-lg tracking-wider text-primary'>Pricing</h2>

      <h2 className='mb-4 text-center text-3xl font-bold md:text-4xl'>Get unlimitted access</h2>

      <h3 className='mx-auto pb-14 text-center text-xl text-muted-foreground md:w-1/2'>
        Lorem ipsum dolor sit amet consectetur adipisicing reiciendis.
      </h3>

      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-4'>
        {plans.map(({ benefitList, buttonText, description, popular, price, title }) => (
          <Card
            className={
              popular === PopularPlan.YES
                ? 'border-[1.5px] border-primary shadow-black/10 drop-shadow-xl dark:shadow-white/10 lg:scale-110'
                : ''
            }
            key={title}>
            <CardHeader>
              <CardTitle className='pb-2'>{title}</CardTitle>

              <CardDescription className='pb-4'>{description}</CardDescription>

              <div>
                <span className='text-3xl font-bold'>${price}</span>
                <span className='text-muted-foreground'> /month</span>
              </div>
            </CardHeader>

            <CardContent className='flex'>
              <div className='space-y-4'>
                {benefitList.map(benefit => (
                  <span className='flex' key={benefit}>
                    <Check className='mr-2 text-primary' />
                    <h3>{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardContent>

            <CardFooter>
              <Button
                className='w-full'
                variant={popular === PopularPlan.YES ? 'default' : 'secondary'}>
                {buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )

export default PricingSection
