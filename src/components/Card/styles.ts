import styled from 'styled-components'

export const CardContainer = styled.div`
  position: relative;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  padding: 1.25rem;

  aspect-ratio: 1 / 1.2;
`

export const CardImage = styled.div`
  position: absolute;
  width: 7.5rem;
  top: -1.25rem;
  left: 0;
  right: 0;
  margin: 0 auto;

  img {
    display: block;
    max-width: 100%;
    margin: 0 auto;
  }
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;

  h3 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    font-family: 'Baloo 2', cursive;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${(props) => props.theme['base-label']};
    text-align: center;
    font-size: 0.875rem;
  }
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

  span {
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
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
`
