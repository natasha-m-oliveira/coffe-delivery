import styled, { css } from 'styled-components'
import { ButtonBase } from '../../../../components/Button/styles'

export const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  max-width: max-content;

  ${(props) => {
    return css`
      &:nth-child(4n-3) button {
        background-color: ${props.theme['yellow-700']};
      }
      &:nth-child(4n-2) button {
        background-color: ${props.theme['base-text']};
      }
      &:nth-child(4n-1) button {
        background-color: ${props.theme['yellow-500']};
      }
      &:nth-child(4n) button {
        background-color: ${props.theme['purple-500']};
      }
    `
  }}
`

export const IconContainer = styled(ButtonBase)`
  border-radius: 50% !important;
  cursor: unset;
  color: ${(props) => props.theme.background};
`
