import React, { forwardRef, InputHTMLAttributes } from 'react'
import { InputTextContainer } from './styles'

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  error?: string
}

const InputRoot: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputTextProps
> = ({ className, error, required, ...rest }, ref) => {
  return (
    <InputTextContainer className={className} error={error} required={required}>
      <input type="text" {...rest} ref={ref} />
    </InputTextContainer>
  )
}

export const InputText = forwardRef(InputRoot)
