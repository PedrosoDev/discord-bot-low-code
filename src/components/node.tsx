import { cn } from '@src/lib/utils'
import { ComponentProps } from 'react'

type Props = ComponentProps<'div'> & {
  isSelected: boolean
}

export default function Node({ isSelected, className, ...props }: Props) {
  return (
    <div
      data-selected={isSelected}
      className={cn(
        'rounded border bg-white px-6 py-3 data-[selected=true]:border-primary',
        className,
      )}
      {...props}
    />
  )
}
