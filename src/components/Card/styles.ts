import styled, { css } from 'styled-components'

interface CardProps {
  variant: 'catalog' | 'cart'
}

export const CardContainer = styled.div<CardProps>`
  ${(props) => {
    if (props.variant === 'catalog')
      return css`
        position: relative;

        background-color: ${props.theme['base-card']};
        border-radius: 6px 36px;
        padding: 1.25rem;

        aspect-ratio: 1 / 1.2;
      `
    return css`
      display: grid;
      grid-template-columns: 4rem 1fr;
      align-items: center;
      gap: 1.25rem;
      background-color: ${props.theme['base-card']};
      padding: 0.25rem 0.5rem;
    `
  }}
`

export const CardImage = styled.div<CardProps>`
  img {
    display: block;
    max-width: 100%;
    margin: 0 auto;
  }
  ${(props) => {
    if (props.variant === 'catalog')
      return css`
        position: absolute;
        width: 7.5rem;
        top: -1.25rem;
        left: 0;
        right: 0;
        margin: 0 auto;
      `
  }}
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
`

export const CardTagsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  margin-top: 5rem;
`

export const CardTag = styled.span`
  background-color: ${(props) => props.theme['yellow-300']};
  max-width: max-content;

  color: ${(props) => props.theme['yellow-700']};
  font-weight: bold;
  font-size: 0.625rem;
  text-transform: uppercase;

  border-radius: 100vw;
  padding: 0.25rem 0.5rem;
`

export const BuyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  margin-top: 2rem;
`

export const CardDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 3.5rem;
  row-gap: 0.5rem;
  column-gap: 3.125rem;
`

export const PriceContainer = styled.span`
  color: ${(props) => props.theme['base-text']};
  font-family: 'Baloo 2', cursive;
  font-weight: bolder;
  font-size: 1.5rem;
  text-align: right;

  &::before {
    content: 'R$';
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    margin-right: 0.25rem;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`
