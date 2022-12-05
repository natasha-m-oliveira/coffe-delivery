import styled from 'styled-components'

export const LayoutContainer = styled.div`
  min-height: 100vh;
  max-width: 74rem;
  margin: 0 auto;
  padding: 1rem;
  background: ${(props) => props.theme.background};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`
