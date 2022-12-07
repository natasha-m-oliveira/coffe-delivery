import styled, { css } from 'styled-components'

export const FormContainer = styled.div`
  flex: 1;
`

const StepBase = styled.div`
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

export const AddressContainer = styled(StepBase)`
  margin-top: 1rem;

  .icon {
    color: ${(props) => props.theme['yellow-700']};
  }

  .content {
    display: grid;
    grid-template-columns: repeat(12, [col-start] 1fr);
    grid-row-gap: 1rem;
    grid-column-gap: 0.75rem;
  }

  .content > :not(:empty) {
    &:nth-child(1),
    &:nth-child(3),
    &:nth-child(5) {
      grid-column: col-start / 5;
    }

    &:nth-child(2) {
      grid-column: 1 / -1;
    }

    &:nth-child(4) {
      grid-column: 5 / 13;
    }

    &:nth-child(6) {
      grid-column: 5 / 12;
    }

    &:last-child {
      grid-column: 12 / -1;
      min-width: 3.5rem;
    }

    @media (max-width: 640px) {
      & {
        grid-column: 1 / -1 !important;
      }
    }
  }
`

export const PaymentContainer = styled(StepBase)`
  margin-top: 0.75rem;

  .icon {
    color: ${(props) => props.theme['purple-500']};
  }

  .content {
    flex: 1;
    display: flex;
    gap: 0.75rem;

    .text {
      line-height: 180% !important;
    }

    .button {
      width: 100%;
      padding: 1rem;
      gap: 0.75rem;
      justify-content: left;
      ${(props) => {
        return css`
          background-color: ${props.theme['base-button']};
          color: ${props.theme['purple-500']};
          &[data-state='checked'],
          &:focus {
            box-shadow: 0 0 0 2px ${props.theme['purple-500']};
          }
          &[data-state='checked'] {
            background-color: ${props.theme['purple-300']};
          }
          &:hover:not([data-state='checked']) {
            background-color: ${props.theme['base-hover']};
          }
        `
      }}
    }
  }
`
