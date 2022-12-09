import { useContext } from 'react'
import { Button } from '../../../../components/Button'
import { Card } from '../../../../components/Card'
import { Text } from '../../../../components/Text'
import { CartContext } from '../../../../contexts/CartContext'
import {
  PurchaseOrderContainer,
  PurchasesWrapper,
  TotalPurchaseContainer,
} from './styles'

export function PurchaseOrder() {
  const { purchases, purchaseTotal, freight } = useContext(CartContext)

  return (
    <PurchaseOrderContainer>
      <PurchasesWrapper>
        {purchases.map((purchase) => (
          <Card key={purchase.id} variant="cart" coffee={purchase} />
        ))}
      </PurchasesWrapper>
      <TotalPurchaseContainer>
        <Text size="sm">Total de itens</Text>
        <Text size="sm">
          {purchaseTotal.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </Text>
        <Text size="sm">Entrega</Text>
        <Text size="sm">
          {freight.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </Text>

        <Text size="lg" weight="bold">
          Total
        </Text>
        <Text size="lg" weight="bold">
          {(purchaseTotal + freight).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </Text>

        <Button large>CONFIRMAR PEDIDO</Button>
      </TotalPurchaseContainer>
    </PurchaseOrderContainer>
  )
}
