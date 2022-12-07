import styled, { css } from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export type TextSize = 'xs' | 'sm' | 'md' | 'lg'

export type TextWeight = 'bold' | 'normal'

export type TextVariant = 'primary' | 'secondary' | 'tertiary'

export type TextAlign = 'left' | 'center' | 'right' | 'justify'

interface TextContainerProps {
  size: TextSize
  weight: TextWeight
  variant: TextVariant
  align: TextAlign
}

const TextSizes = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.25rem',
}

const TextWeights = {
  bold: 700,
  normal: 400,
}

const TextVariants = {
  primary: defaultTheme['base-text'],
  secondary: defaultTheme['base-label'],
  tertiary: defaultTheme['base-subtitle'],
}

export const TextContainer = styled.div<TextContainerProps>`
  .text {
    font-family: 'Roboto', sans-serif;
    line-height: 130%;
  }
  ${(props) => {
    return css`
      .text {
        font-size: ${TextSizes[props.size]};
        font-weight: ${TextWeights[props.weight]};
        color: ${TextVariants[props.variant]};
        text-align: ${props.align};
      }
    `
  }}
`
