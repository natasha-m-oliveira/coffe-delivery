import { useContext, useRef } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Title } from '../../components/Title'
import { CartContext, DeliveryDetails } from '../../contexts/CartContext'
import { EmptyCart } from '../EmptyCart'
import { Success } from '../Success'
import { Address } from './components/Address'
import { Payment } from './components/Payment'
import { PurchaseOrder } from './components/PurchaseOrder'
import { CheckoutContainer } from './styles'

export function Checkout() {
  const methods = useForm<DeliveryDetails>({ shouldUseNativeValidation: false })
  const success = useRef(false)

  const { handleSubmit } = methods
  const { purchases, addDeliveryDetails } = useContext(CartContext)

  if (success.current) {
    return <Success />
  }

  if (!purchases.length) {
    return <EmptyCart />
  }

  function onSubmit(data: DeliveryDetails) {
    addDeliveryDetails(data)
    success.current = true
  }

  return (
    <FormProvider {...methods}>
      <CheckoutContainer onSubmit={handleSubmit(onSubmit)}>
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
    </FormProvider>
  )
}
