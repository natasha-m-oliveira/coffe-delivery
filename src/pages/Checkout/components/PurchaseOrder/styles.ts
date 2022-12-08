import styled from 'styled-components'

export const PurchaseOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  padding: 2.5rem;
`

export const PurchasesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  > * {
    position: relative;
  }

  > *::before {
    content: '';
    position: absolute;
    width: 100%;
    background-color: ${(props) => props.theme['base-button']};
    top: -1.5rem;
  }

  > * ~ *::before {
    height: 1px;
  }
`

export const TotalPurchaseContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  position: relative;
  margin-top: 3rem;

  > *:nth-child(even) {
    justify-self: end;
  }

  > *:last-child {
    grid-column: 1 / -1;
    margin-top: 0.75rem;
  }

  ::before {
    content: '';
    position: absolute;
    width: 100%;
    background-color: ${(props) => props.theme['base-button']};
    top: -1.5rem;
    height: 1px;
  }
`
