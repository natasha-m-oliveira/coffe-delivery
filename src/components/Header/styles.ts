import styled, { css } from 'styled-components'
import { ButtonBase } from '../Button/styles'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 0.75rem;
`

export const LocationContainer = styled(ButtonBase)`
  ${(props) => {
    return css`
      background-color: ${props.theme['purple-300']};
      color: ${props.theme['purple-700']};
      &:hover {
        background-color: ${props.theme['purple-500']};
        color: ${props.theme['base-card']};
      }
      &:focus {
        box-shadow: 0 0 0 2px ${props.theme['purple-700']};
      }
    `
  }}
`

export const CartContainer = styled(ButtonBase)`
  position: relative;

  ${(props) => {
    return css`
      background-color: ${props.theme['yellow-300']};
      color: ${props.theme['yellow-700']};
      &:hover {
        background-color: ${props.theme['yellow-500']};
        color: ${props.theme.white};
      }
      &:focus {
        box-shadow: 0 0 0 2px ${props.theme['yellow-700']};
      }
    `
  }}
`

interface BadgeContainerProps {
  empty: boolean
}

export const BadgeContainer = styled.span<BadgeContainerProps>`
  position: absolute;
  right: -10px;
  top: -10px;
  width: 20px;
  border-radius: 50%;
  font-size: 0.75rem;

  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  ${(props) => {
    return css`
      background-color: ${props.theme['yellow-700']};
      color: ${props.theme.white};
      opacity: ${props.empty ? 0 : 1};
    `
  }}
`
