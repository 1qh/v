import { icons } from 'lucide-react'

const Icon = ({
  className,
  color,
  name,
  size
}: {
  readonly className?: string
  readonly color: string
  readonly name: keyof typeof icons
  readonly size: number
}) => {
  const LucideIcon = icons[name]
  return <LucideIcon className={className} color={color} size={size} />
}

export default Icon
