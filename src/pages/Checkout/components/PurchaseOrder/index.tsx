import { Button } from '../../../../components/Button'
import { Card } from '../../../../components/Card'
import { Text } from '../../../../components/Text'
import {
  PurchaseOrderContainer,
  PurchasesWrapper,
  TotalPurchaseContainer,
} from './styles'

export function PurchaseOrder() {
  return (
    <PurchaseOrderContainer>
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
        <Text size="sm">Total de itens</Text>
        <Text size="sm">R$ 29,70</Text>
        <Text size="sm">Entrega</Text>
        <Text size="sm">R$ 3,50</Text>

        <Text size="lg" weight="bold">
          Total
        </Text>
        <Text size="lg" weight="bold">
          R$ 33,20
        </Text>

        <Button large>CONFIRMAR PEDIDO</Button>
      </TotalPurchaseContainer>
    </PurchaseOrderContainer>
  )
}
