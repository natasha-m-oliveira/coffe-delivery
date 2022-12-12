import { ShoppingBagOpen } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Text } from '../../components/Text'
import { Title } from '../../components/Title'
import { EmptyCartContainer } from './styles'

export function EmptyCart() {
  return (
    <EmptyCartContainer>
      <span className="icon">
        <ShoppingBagOpen size={96} weight="fill" />
      </span>
      <div>
        <Title size="lg" variant="tertiary" align="center">
          Seu carrinho está vazio
        </Title>
        <Text size="lg" align="center">
          Parece que você ainda não adicionou nada ao carrinho
        </Text>
      </div>
      <Link to="/">
        <Button variant="secondary">Continuar comprando</Button>
      </Link>
    </EmptyCartContainer>
  )
}
