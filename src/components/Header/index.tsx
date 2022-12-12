import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import { Logo } from '../../Logo'
import {
  ActionsContainer,
  BadgeContainer,
  CartContainer,
  HeaderContainer,
  LocationContainer,
} from './styles'

export function Header() {
  const { purchases, deliveryDetails } = useContext(CartContext)

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
            <BadgeContainer
              empty={!purchases.length || !!Object.keys(deliveryDetails).length}
            >
              {purchases.length}
            </BadgeContainer>
          </CartContainer>
        </Link>
      </ActionsContainer>
    </HeaderContainer>
  )
}
