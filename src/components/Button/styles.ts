import styled, { css } from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export type ButtonVariant = 'primary' | 'secondary' | 'neutral'

interface ButtonContainerProps {
  variant: ButtonVariant
  fab: boolean
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
  neutral: {
    bg: defaultTheme['base-button'],
    text: defaultTheme['purple-500'],
    'bg-hover': defaultTheme['base-hover'],
  },
}

export const ButtonBase = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  padding: 0.5rem;
  border: 0;

  cursor: pointer;

  font-weight: bold;

  transition-property: color, background-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
`

export const ButtonContainer = styled(ButtonBase)<ButtonContainerProps>`
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

      ${props.fab ? `border-radius: 50%;` : `border-radius: 6px;`}
    `
  }}
`
