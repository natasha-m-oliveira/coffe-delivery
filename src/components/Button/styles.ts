import styled, { css } from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export type ButtonVariant = 'primary' | 'secondary'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: {
    bg: defaultTheme['yellow-500'],
    text: defaultTheme.white,
    'bg-hover': defaultTheme['yellow-700'],
  },
  secondary: {
    bg: defaultTheme['purple-700'],
    text: defaultTheme['base-card'],
    'bg-hover': defaultTheme['purple-500'],
  },
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  padding: 0.5rem;
  border-radius: 6px;
  border: 0;

  cursor: pointer;

  font-weight: bold;

  ${(props) => {
    return css`
      background-color: ${buttonVariants[props.variant].bg};
      color: ${buttonVariants[props.variant].text};
      &:hover {
        background-color: ${buttonVariants[props.variant]['bg-hover']};
      }
      &:focus {
        box-shadow: 0 0 0 2px ${buttonVariants[props.variant]['bg-hover']};
      }
    `
  }}
`
