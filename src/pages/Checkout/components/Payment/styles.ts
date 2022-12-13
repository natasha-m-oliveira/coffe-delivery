import styled, { css } from 'styled-components'
import { StepBase } from '../../styles'

export const PaymentContainer = styled(StepBase)`
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
          &[data-state='checked'] {
            background-color: ${props.theme['purple-300']};
            box-shadow: 0 0 0 2px ${props.theme['purple-500']};
          }
          &:hover:not([data-state='checked']) {
            background-color: ${props.theme['base-hover']};
          }
        `
      }}
    }

    @media (max-width: 680px) {
      flex-direction: column;
    }
  }

  .invalid {
    .button {
      box-shadow: 0 0 0 2px ${(props) => props.theme['red-500']};
    }
  }
`
