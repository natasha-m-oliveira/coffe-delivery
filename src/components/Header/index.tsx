import { MapPin, ShoppingCart } from 'phosphor-react'
import { Logo } from '../../Logo'
import { Button } from '../Button'
import { ActionsContainer, HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <ActionsContainer>
        <Button variant="secondary">
          <MapPin weight="fill" size={22} /> Porto Alegre, RS
        </Button>
        <Button>
          <ShoppingCart weight="fill" size={22} />
        </Button>
      </ActionsContainer>
    </HeaderContainer>
  )
}
