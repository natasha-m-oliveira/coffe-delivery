import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyled } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Router } from './Router'
import { CartContextProvider } from './contexts/CartContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>

      <GlobalStyled />
    </ThemeProvider>
  )
}
