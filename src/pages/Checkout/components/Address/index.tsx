import { MapPinLine } from 'phosphor-react'
import { InputText } from '../../../../components/InputText'
import { Text } from '../../../../components/Text'
import { AddressContainer } from './styles'

export function Address() {
  return (
    <AddressContainer>
      <div className="header">
        <span className="icon">
          <MapPinLine size={22} />
        </span>
        <div>
          <Text variant="tertiary">Endereço de Entrega</Text>
          <Text size="sm">
            Informe o endereço onde deseja receber seu pedido
          </Text>
        </div>
      </div>

      <div className="content">
        <InputText placeholder="CEP" required />
        <InputText placeholder="Rua" required />
        <InputText placeholder="Número" required />
        <InputText placeholder="Complemento" />
        <InputText placeholder="Bairro" required />
        <InputText placeholder="Cidade" required />
        <InputText placeholder="UF" required />
      </div>
    </AddressContainer>
  )
}
