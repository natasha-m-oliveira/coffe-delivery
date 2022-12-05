import { InputHTMLAttributes } from 'react'
import { InputTextContainer } from './styles'

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {}

export function InputText(props: InputTextProps) {
  return <InputTextContainer {...props} />
}
