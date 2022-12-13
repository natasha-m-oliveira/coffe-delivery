import { Minus, Plus } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { ControllerContainer, NumericInputContainer } from './styles'

interface NumericInputProps {
  min?: number
  max?: number
  initialValue?: number
  onChange?: (value: number) => void
}

export function NumericInput({
  min = 1,
  max,
  initialValue,
  onChange,
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
    onChange && onChange(amount)
  }, [amount, onChange])

  return (
    <NumericInputContainer>
      <ControllerContainer onClick={handleDecrement}>
        <Minus weight="bold" size={14} />
      </ControllerContainer>
      <input type="number" max={max} min={min} value={amount} readOnly />
      <ControllerContainer onClick={handleIncrement}>
        <Plus weight="bold" size={14} />
      </ControllerContainer>
    </NumericInputContainer>
  )
}
