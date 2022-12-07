import { Form } from './components/Form'
import { PurchaseOrder } from './components/PurchaseOrder'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <Form />
      <PurchaseOrder />
    </CheckoutContainer>
  )
}
