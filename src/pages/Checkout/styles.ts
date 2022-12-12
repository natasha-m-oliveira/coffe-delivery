import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  display: grid;
  grid-template-areas:
    'firstTitle secondTitle'
    'address purchaseOrder';
  grid-template-columns: 1fr max-content;
  grid-template-rows: min-content 1fr;
  row-gap: 1rem;
  column-gap: 2rem;
  margin: 2.5rem 0;

  > *:nth-child(1) {
    grid-area: firstTitle;
  }

  > *:nth-child(2) {
    grid-area: address;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  > *:nth-child(3) {
    grid-area: secondTitle;
  }

  > *:nth-child(4) {
    grid-area: purchaseOrder;
    height: min-content;
  }

  @media (max-width: 950px) {
    display: flex;
    flex-direction: column;

    > *:nth-child(2) {
      margin-bottom: 1rem;
    }
  }
`

export const StepBase = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;

  .header {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
  }
`
