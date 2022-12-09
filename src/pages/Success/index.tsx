import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { Text } from '../../components/Text'
import { Title } from '../../components/Title'
import { OrderInfoContainer, SuccessContainer } from './styles'

export function Success() {
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
          <div className="">
            <span>
              <MapPin size={32} />
            </span>
            <Text>Entrega em Rua João Daniel Martinelli, 102</Text>
            <Text>Farrapos - Porto Alegre, RS</Text>
          </div>

          <div className="">
            <span>
              <Timer size={32} />
            </span>
            <Text>Previsão de entrega</Text>
            <Text>20 min - 30 min</Text>
          </div>

          <div className="">
            <span>
              <CurrencyDollar size={32} />
            </span>
            <Text>Pagamento na entrega</Text>
            <Text>Cartão de Crédito</Text>
          </div>
        </OrderInfoContainer>
      </div>
      <div className="">
        <img src="illustration.svg" alt="Ilustração de Entregador" />
      </div>
    </SuccessContainer>
  )
}
