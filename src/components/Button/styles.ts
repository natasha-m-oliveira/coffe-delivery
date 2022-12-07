import styled, { css } from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export type ButtonVariant = 'primary' | 'secondary' | 'neutral'

interface ButtonContainerProps {
  variant: ButtonVariant
  fab: boolean
  large: boolean
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

export const ButtonBase = styled.button.attrs((props) => ({
  className: props.className || 'button',
}))``

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

      ${props.fab && 'border-radius: 50% !important;'}
      ${props.large && 'padding: 1rem !important;'}
      ${props.large && 'gap: 0.75rem !important;'}
      ${props.large && 'text-transform: uppercase;'}
      ${props.large && 'width: 100%;'}
    `
  }}
`
