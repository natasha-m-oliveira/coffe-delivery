import styled from 'styled-components'

export const SuccessContainer = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 5rem;
`

export const OrderInfoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2.5rem;

  background: ${(props) => props.theme.background};
  padding: 2.5rem;
  border-radius: 6px 36px;
  box-sizing: border-box;

  background-clip: padding-box;
  border: 1px solid transparent;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    padding: 1px;
    border-radius: inherit;
    background: linear-gradient(to right, #dbac2c, #8047f8);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 50%;
    color: ${(props) => props.theme.background};
  }

  &:nth-child(1) > .icon {
    background-color: ${(props) => props.theme['purple-500']};
  }

  &:nth-child(2) > .icon {
    background-color: ${(props) => props.theme['yellow-500']};
  }

  &:nth-child(3) > .icon {
    background-color: ${(props) => props.theme['yellow-700']};
  }

  .location {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};

    span {
      font-weight: 700;
    }
  }
`

export const ImageContainer = styled.div`
  img {
    display: block;
    max-width: 100%;
  }
`
