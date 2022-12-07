import { HTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import {
  TextAlign,
  TextContainer,
  TextSize,
  TextVariant,
  TextWeight,
} from './styles'

export interface TextProps extends HTMLAttributes<HTMLDivElement> {
  size?: TextSize
  weight?: TextWeight
  variant?: TextVariant
  align?: TextAlign
  children: ReactNode
  asChild?: boolean
}

export function Text({
  size = 'md',
  weight = 'normal',
  variant = 'primary',
  align = 'left',
  children,
  asChild = false,
  className,
  ...rest
}: TextProps) {
  const Comp = asChild ? Slot : 'span'

  return (
    <TextContainer size={size} weight={weight} variant={variant} align={align}>
      <Comp {...rest} className="text">
        {children}
      </Comp>
    </TextContainer>
  )
}
