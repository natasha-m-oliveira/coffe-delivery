import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext, useEffect, useRef } from 'react'
import { Text } from '../../components/Text'
import { Title } from '../../components/Title'
import { CartContext } from '../../contexts/CartContext'
import {
  ImageContainer,
  ItemContainer,
  OrderInfoContainer,
  SuccessContainer,
} from './styles'

const methods = {
  credit: 'Cartão de Crédito',
  debit: 'Cartão de Débito',
  cash: 'Dinheiro',
}

export function Success() {
  const ignoreRef = useRef(false)
  const { deliveryDetails, checkout } = useContext(CartContext)
  const { street, number, district, city, state, paymentMethod } =
    deliveryDetails

  useEffect(() => {
    return () => {
      if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        !ignoreRef.current ? (ignoreRef.current = true) : checkout()
      } else {
        checkout()
      }
    }
  }, [checkout])

  return (
    <SuccessContainer>
      <div>
        <Title size="lg" variant="tertiary">
          Uhu! Pedido confirmado
        </Title>
        <Text size="lg">
          Agora é só aguardar que logo o café chegará até você
        </Text>

        <OrderInfoContainer>
          <ItemContainer>
            <span className="icon">
              <MapPin size={16} weight="fill" />
            </span>
            <div>
              <p className="location">
                Entrega em{' '}
                <span>
                  {street}, {number}
                </span>
              </p>
              <Text>
                {district} - {city}, {state}
              </Text>
            </div>
          </ItemContainer>

          <ItemContainer>
            <span className="icon">
              <Timer size={16} weight="fill" />
            </span>
            <div>
              <Text>Previsão de entrega</Text>
              <Text>20 min - 30 min</Text>
            </div>
          </ItemContainer>

          <ItemContainer>
            <span className="icon">
              <CurrencyDollar size={16} weight="fill" />
            </span>
            <div>
              <Text>Pagamento na entrega</Text>
              <Text>{methods[paymentMethod]}</Text>
            </div>
          </ItemContainer>
        </OrderInfoContainer>
      </div>
      <ImageContainer>
        <img src="illustration.svg" alt="Ilustração de Entregador" />
      </ImageContainer>
    </SuccessContainer>
  )
}
