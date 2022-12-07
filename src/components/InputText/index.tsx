import { InputHTMLAttributes } from 'react'
import { InputTextContainer } from './styles'

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export function InputText({ className, ...rest }: InputTextProps) {
  return (
    <InputTextContainer className={className}>
      <input type="text" {...rest} />
    </InputTextContainer>
  )
}
