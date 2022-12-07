import { Bank, CreditCard, MapPinLine } from 'phosphor-react'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { InputText } from '../../../../components/InputText'
import { Text } from '../../../../components/Text'
import { Title } from '../../../../components/Title'
import { AddressContainer, FormContainer, PaymentContainer } from './styles'

export function Form() {
  return (
    <FormContainer>
      <Title size="xs" variant="secondary">
        Complete seu pedido
      </Title>

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

      <PaymentContainer>
        <div className="header">
          <span className="icon">
            <MapPinLine size={22} />
          </span>
          <div>
            <Text variant="tertiary">Pagamento</Text>
            <Text size="sm">
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </Text>
          </div>
        </div>

        <RadioGroup.Root className="content">
          <RadioGroup.Item value="credit" className="button">
            <CreditCard size={16} />
            <Text size="xs">CARTÃO DE CRÉDITO</Text>
          </RadioGroup.Item>
          <RadioGroup.Item value="debit" className="button">
            <Bank size={16} />
            <Text size="xs">CARTÃO DE DÉBITO</Text>
          </RadioGroup.Item>
          <RadioGroup.Item value="cash" className="button">
            <CreditCard size={16} />
            <Text size="xs">DINHEIRO</Text>
          </RadioGroup.Item>
        </RadioGroup.Root>
      </PaymentContainer>
    </FormContainer>
  )
}
