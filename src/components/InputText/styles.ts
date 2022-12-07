import styled from 'styled-components'

export const InputTextContainer = styled.input`
  background-color: ${(props) => props.theme['base-input']};
  &:focus,
  &:hover {
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-700']};
  }
  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-700']};
  }

  font-size: 0.875rem;
`
