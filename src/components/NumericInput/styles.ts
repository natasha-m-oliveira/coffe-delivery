import styled from 'styled-components'

export const NumericInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme['base-button']};

  input {
    width: 20px;
    height: 22px;
    text-align: center;
    background-color: transparent;
    border: 0;
    box-shadow: none;
    font-size: 1rem;
    line-height: 130%;

    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
`

export const ControllerContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme['purple-500']};
  border: 0;
  box-shadow: none;
  background-color: transparent;
  cursor: pointer;

  transition-property: color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:hover {
    color: ${(props) => props.theme['purple-700']};
  }
`
