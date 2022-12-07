import { HTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import {
  TitleAlign,
  TitleContainer,
  TitleSize,
  TitleVariant,
  TitleWeight,
} from './styles'

export interface TitleProps extends HTMLAttributes<HTMLDivElement> {
  size?: TitleSize
  weight?: TitleWeight
  variant?: TitleVariant
  align?: TitleAlign
  children: ReactNode
  asChild?: boolean
}

export function Title({
  size = 'md',
  weight = 'bold',
  variant = 'primary',
  align = 'left',
  children,
  asChild = false,
  className,
  ...rest
}: TitleProps) {
  const Comp = asChild ? Slot : 'h2'

  return (
    <TitleContainer size={size} weight={weight} variant={variant} align={align}>
      <Comp {...rest} className="title">
        {children}
      </Comp>
    </TitleContainer>
  )
}
