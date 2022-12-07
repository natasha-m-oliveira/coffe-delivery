import { Button } from '../../../../components/Button'
import { Card } from '../../../../components/Card'
import { Text } from '../../../../components/Text'
import { Title } from '../../../../components/Title'
import {
  PurchaseOrderContainer,
  PurchasesWrapper,
  TotalPurchaseContainer,
} from './styles'

export function PurchaseOrder() {
  return (
    <PurchaseOrderContainer>
      <div className="header">
        <Title size="xs" variant="secondary">
          Cafés selecionados
        </Title>
      </div>
      <div className="content">
        <PurchasesWrapper>
          <Card
            variant="cart"
            title="Expresso Tradicional"
            amount={9.9}
            image="espresso.png"
          />
          <Card
            variant="cart"
            title="Expresso Tradicional"
            amount={9.9}
            image="espresso.png"
          />
          <Card
            variant="cart"
            title="Expresso Tradicional"
            amount={9.9}
            image="espresso.png"
          />
          <Card
            variant="cart"
            title="Expresso Tradicional"
            amount={9.9}
            image="espresso.png"
          />
        </PurchasesWrapper>
        <TotalPurchaseContainer>
          <Text>Total de itens</Text>
          <Text>R$ 29,70</Text>
          <Text>Entrega</Text>
          <Text>R$ 3,50</Text>
          <Text>Total</Text>
          <Text>R$ 33,20</Text>

          <Button large>CONFIRMAR PEDIDO</Button>
        </TotalPurchaseContainer>
      </div>
    </PurchaseOrderContainer>
  )
}
