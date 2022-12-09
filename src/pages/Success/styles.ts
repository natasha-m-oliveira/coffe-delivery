import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 2rem;
  flex-wrap: wrap;
`

export const OrderInfoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  background-color: ${(props) => props.theme.background};
  padding: 2.5rem;
  border-radius: 6px 36px;

  border-width: 1px;
  border-style: solid;
  border-image: linear-gradient(to right, #dbac2c, #8047f8) 4 100%;
`
