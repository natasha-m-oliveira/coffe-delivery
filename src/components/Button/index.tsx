import { ButtonHTMLAttributes, ReactNode } from 'react'
import { ButtonContainer, ButtonVariant } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: ButtonVariant
  fab?: boolean
  plain?: boolean
}

export function Button({
  children,
  variant = 'primary',
  fab = false,
  ...rest
}: ButtonProps) {
  return (
    <ButtonContainer variant={variant} fab={fab} {...rest}>
      {children}
    </ButtonContainer>
  )
}
