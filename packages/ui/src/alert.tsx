import type { VariantProps } from 'class-variance-authority'
import * as React from 'react'
import { cva } from 'class-variance-authority'

import { cn } from '@a/ui'

const alertVariants = cva(
    'relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7',
    {
      defaultVariants: {
        variant: 'default'
      },
      variants: {
        variant: {
          default: 'bg-background text-foreground',
          destructive:
            'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive'
        }
      }
    }
  ),
  Alert = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
  >(({ className, variant, ...props }, ref) => (
    <div className={cn(alertVariants({ variant }), className)} ref={ref} role='alert' {...props} />
  )),
  AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => (
      <h5
        className={cn('mb-1 font-medium leading-none tracking-tight', className)}
        ref={ref}
        {...props}
      />
    )
  ),
  AlertDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
  >(({ className, ...props }, ref) => (
    <div className={cn('text-sm [&_p]:leading-relaxed', className)} ref={ref} {...props} />
  ))

Alert.displayName = 'Alert'
AlertDescription.displayName = 'AlertDescription'
AlertTitle.displayName = 'AlertTitle'

export { Alert, AlertDescription, AlertTitle }
