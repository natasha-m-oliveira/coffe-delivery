import styled from 'styled-components'
import { StepBase } from '../../styles'

export const AddressContainer = styled(StepBase)`
  .icon {
    color: ${(props) => props.theme['yellow-700']};
  }

  .content {
    display: grid;
    grid-template-columns: repeat(12, [col-start] 1fr);
    grid-row-gap: 1rem;
    grid-column-gap: 0.75rem;

    @media (max-width: 640px) {
      display: flex;
      flex-direction: column;
    }
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
  }
`
