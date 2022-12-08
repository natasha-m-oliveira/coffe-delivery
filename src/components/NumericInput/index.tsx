import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import { ControllerContainer, NumericInputContainer } from './styles'

interface NumericInputProps {
  min?: number
  max?: number
}

export function NumericInput({ min = 1, max }: NumericInputProps) {
  const [amount, setAmount] = useState(min)

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

  return (
    <NumericInputContainer>
      <ControllerContainer onClick={handleDecrement}>
        <Minus weight="bold" size={14} />
      </ControllerContainer>
      <input
        type="number"
        max={max}
        min={min}
        value={amount}
        onChange={({ target }) => setAmount(Number(target.value))}
      />
      <ControllerContainer onClick={handleIncrement}>
        <Plus weight="bold" size={14} />
      </ControllerContainer>
    </NumericInputContainer>
  )
}
