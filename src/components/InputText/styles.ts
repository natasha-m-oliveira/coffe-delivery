import styled from 'styled-components'

export const InputTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.25rem;
  background-color: ${(props) => props.theme['base-input']};
  border-radius: 4px;
  padding: 0.75rem;
  input {
    width: 100%;

    background-color: transparent;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
    border: 0;
    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
  &:focus,
  &:hover {
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-700']};
  }
  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-700']};
  }
  &:has(input:not(:required)) {
    &::after {
      content: 'Optional';
      font-family: 'Roboto', sans-serif;
      font-size: 0.75rem;
      font-weight: 400;
      font-style: italic;
      line-height: 130%;
    }
  }
`
