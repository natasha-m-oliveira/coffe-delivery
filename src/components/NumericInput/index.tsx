import { Minus, Plus } from 'phosphor-react'
import { InputHTMLAttributes, useEffect, useState } from 'react'
import { ControllerContainer, NumericInputContainer } from './styles'

interface NumericInputProps extends InputHTMLAttributes<HTMLInputElement> {
  min?: number
  max?: number
  initialValue?: number
  onValueChange?: (value: number) => void
}

export function NumericInput({
  min = 1,
  max,
  initialValue,
  onValueChange,
  ...rest
}: NumericInputProps) {
  const [amount, setAmount] = useState(initialValue || min)

  function handleDecrement() {
    setAmount((state) => {
      return state > min ? --state : min
    })
  }

  function handleIncrement() {
    setAmount((state) => {
      if (max && state === max) {
        return max
      }
      return ++state
    })
  }

  useEffect(() => {
    onValueChange && onValueChange(amount)
  }, [amount, onValueChange])

  return (
    <NumericInputContainer>
      <ControllerContainer type="button" onClick={handleDecrement}>
        <Minus weight="bold" size={14} />
      </ControllerContainer>
      <input
        type="number"
        max={max}
        min={min}
        value={amount}
        readOnly
        {...rest}
      />
      <ControllerContainer type="button" onClick={handleIncrement}>
        <Plus weight="bold" size={14} />
      </ControllerContainer>
    </NumericInputContainer>
  )
}
