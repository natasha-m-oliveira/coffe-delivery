import styled from 'styled-components'

export const PurchaseOrderContainer = styled.div`
  .content {
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme['base-card']};
    border-radius: 6px 36px;
    padding: 2.5rem;
    margin-top: 1rem;
  }
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

export const TotalPurchaseContainer = styled.div``
