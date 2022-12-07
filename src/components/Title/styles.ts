import styled, { css } from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export type TitleSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type TitleWeight = 'bold' | 'extrabold'

export type TitleVariant = 'primary' | 'secondary' | 'tertiary'

export type TitleAlign = 'left' | 'center' | 'right' | 'justify'

interface TitleContainerProps {
  size: TitleSize
  weight: TitleWeight
  variant: TitleVariant
  align: TitleAlign
}

const TitleSizes = {
  xs: '1.125rem',
  sm: '1.25rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '3rem',
}

const TitleWeights = {
  bold: 700,
  extrabold: 800,
}

const TitleVariants = {
  primary: defaultTheme['base-title'],
  secondary: defaultTheme['base-subtitle'],
  tertiary: defaultTheme['yellow-700'],
}

export const TitleContainer = styled.div<TitleContainerProps>`
  .title {
    font-family: 'Baloo 2', cursive;
    line-height: 130%;
  }
  ${(props) => {
    return css`
      .title {
        font-size: ${TitleSizes[props.size]};
        font-weight: ${TitleWeights[props.weight]};
        color: ${TitleVariants[props.variant]};
        text-align: ${props.align};
      }
    `
  }}
`
