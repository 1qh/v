'use client'

import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import { cn } from '@a/ui'

const Tabs = TabsPrimitive.Root,
  TabsList = React.forwardRef<
    React.ElementRef<typeof TabsPrimitive.List>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
  >(({ className, ...props }, ref) => (
    <TabsPrimitive.List
      className={cn(
        'inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground',
        className
      )}
      ref={ref}
      {...props}
    />
  )),
  TabsTrigger = React.forwardRef<
    React.ElementRef<typeof TabsPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
  >(({ className, ...props }, ref) => (
    <TabsPrimitive.Trigger
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow',
        className
      )}
      ref={ref}
      {...props}
    />
  )),
  TabsContent = React.forwardRef<
    React.ElementRef<typeof TabsPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
  >(({ className, ...props }, ref) => (
    <TabsPrimitive.Content
      className={cn(
        'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        className
      )}
      ref={ref}
      {...props}
    />
  ))

TabsContent.displayName = TabsPrimitive.Content.displayName
TabsList.displayName = TabsPrimitive.List.displayName
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

export { Tabs, TabsContent, TabsList, TabsTrigger }
