import { ButtonHTMLAttributes, ReactNode } from 'react'
import { ButtonContainer, ButtonVariant } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: ButtonVariant
  fab?: boolean
  large?: boolean
}

export function Button({
  children,
  variant = 'primary',
  fab = false,
  large = false,
  ...rest
}: ButtonProps) {
  return (
    <ButtonContainer variant={variant} fab={fab} large={large} {...rest}>
      {children}
    </ButtonContainer>
  )
}
