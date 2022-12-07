import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { Logo } from '../../Logo'
import {
  ActionsContainer,
  BadgeContainer,
  CartContainer,
  HeaderContainer,
  LocationContainer,
} from './styles'

export function Header() {
  const counter = 1
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo />
      </Link>
      <ActionsContainer>
        <LocationContainer>
          <MapPin weight="fill" size={22} /> Porto Alegre, RS
        </LocationContainer>

        <Link to="/checkout">
          <CartContainer>
            <ShoppingCart weight="fill" size={22} />
            <BadgeContainer empty={!counter}>{counter}</BadgeContainer>
          </CartContainer>
        </Link>
      </ActionsContainer>
    </HeaderContainer>
  )
}
