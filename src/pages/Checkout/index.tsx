import { useContext } from 'react'
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

  const { handleSubmit } = methods
  const { purchases, deliveryDetails, addDeliveryDetails } =
    useContext(CartContext)

  if (Object.keys(deliveryDetails).length) {
    return <Success />
  }

  if (!purchases.length) {
    return <EmptyCart />
  }

  function onSubmit(data: DeliveryDetails) {
    addDeliveryDetails(data)
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
