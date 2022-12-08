import { Title } from '../../components/Title'
import { Address } from './components/Address'
import { Payment } from './components/Payment'
import { PurchaseOrder } from './components/PurchaseOrder'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <Title size="xs" variant="secondary">
        Complete seu pedido
      </Title>
      <div>
        <Address />
        <Payment />
      </div>
      <Title size="xs" variant="secondary">
        Cafés selecionados
      </Title>
      <PurchaseOrder />
    </CheckoutContainer>
  )
}
