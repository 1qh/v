import { Badge } from '@a/ui/badge'
import { Card, CardDescription, CardHeader, CardTitle } from '@a/ui/card'

enum ProService {
  YES = 1,
  NO = 0
}
interface ServiceProps {
  description: string
  pro: ProService
  title: string
}
const serviceList: ServiceProps[] = [
    {
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit adipisicing.',
      pro: 0,
      title: 'Custom Domain Integration'
    },
    {
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, dicta.',
      pro: 0,
      title: 'Social Media Integrations'
    },
    {
      description: 'Lorem dolor sit amet adipisicing.',
      pro: 0,
      title: 'Email Marketing Integrations'
    },
    {
      description: 'Lorem ipsum dolor sit amet consectetur.',
      pro: 1,
      title: 'SEO Optimization'
    }
  ],
  ServicesSection = () => (
    <section className='container py-24 sm:py-32' id='services'>
      <h2 className='mb-2 text-center text-lg tracking-wider text-primary'>Services</h2>

      <h2 className='mb-4 text-center text-3xl font-bold md:text-4xl'>Grow Your Business</h2>
      <h3 className='mx-auto mb-8 text-center text-xl text-muted-foreground md:w-1/2'>
        From marketing and sales to operations and strategy, we have the expertise to help you
        achieve your goals.
      </h3>
      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3' />

      <div className='mx-auto grid w-full gap-4 sm:grid-cols-2 lg:w-3/5 lg:grid-cols-2'>
        {serviceList.map(({ description, pro, title }) => (
          <Card className='relative h-full bg-muted/60 dark:bg-card' key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Badge
              className='absolute -right-3 -top-2 data-[pro=false]:hidden'
              data-pro={ProService.YES === pro}
              variant='secondary'>
              PRO
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  )

export default ServicesSection
