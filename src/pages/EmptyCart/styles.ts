import styled from 'styled-components'

export const EmptyCartContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;

  .icon {
    color: ${(props) => props.theme['yellow-700']};
    background-color: ${(props) => props.theme['yellow-300']};
    border-radius: 50%;
    padding: 1rem;
    margin-bottom: 3rem;
  }

  a {
    text-decoration: none;
    margin-top: 2rem;
  }
`
