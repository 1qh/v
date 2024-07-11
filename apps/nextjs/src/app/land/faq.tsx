import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@a/ui/accordion'

interface FAQProps {
  answer: string
  question: string
  value: string
}

const FAQList: FAQProps[] = [
    {
      answer: 'Yes. It is a free NextJS Shadcn template.',
      question: 'Is this template free?',
      value: 'item-1'
    },
    {
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint labore quidem quam consectetur sapiente, iste rerum reiciendis animi nihil nostrum sit quo, modi quod.',
      question: 'Duis aute irure dolor in reprehenderit in voluptate velit?',
      value: 'item-2'
    },
    {
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore qui nostrum reiciendis veritatis.',
      question: 'Lorem ipsum dolor sit amet Consectetur natus dolor minus quibusdam?',
      value: 'item-3'
    },
    {
      answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      question: 'Excepteur sint occaecat cupidata non proident sunt?',
      value: 'item-4'
    },
    {
      answer: 'consectetur adipisicing elit. Sint labore.',
      question: 'Enim ad minim veniam, quis nostrud exercitation ullamco laboris?',
      value: 'item-5'
    }
  ],
  FAQSection = () => (
    <section className='container py-24 sm:py-32 md:w-[700px]' id='faq'>
      <div className='mb-8 text-center'>
        <h2 className='mb-2 text-center text-lg tracking-wider text-primary'>FAQS</h2>

        <h2 className='text-center text-3xl font-bold md:text-4xl'>Common Questions</h2>
      </div>

      <Accordion className='AccordionRoot' collapsible type='single'>
        {FAQList.map(({ answer, question, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className='text-left'>{question}</AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )

export default FAQSection
