import { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus {
  outline: 0;
}

body{
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme['base-text']};
  -webkit-font-smoothing: antialiased;
}
border-style, input-security, textarea, button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 130%;
}

#root {
  min-height: 100vh;
  max-width: 74rem;
  background: ${(props) => props.theme.background};
  margin: 0 auto;
  padding: 1rem;
}

.button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  padding: 0.5rem;
  border-radius: 6px;
  border: 0;

  cursor: pointer;

  font-weight: bold;

  transition-property: color, background-color, box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

@media (max-width: 768px) {
  html {
    font-size: 87.5%;
  }
}
`
