import * as RadioGroup from '@radix-ui/react-radio-group'
import { Bank, CreditCard, MapPinLine } from 'phosphor-react'
import { Controller, useFormContext } from 'react-hook-form'
import { Text } from '../../../../components/Text'
import { PaymentContainer } from './styles'

export function Payment() {
  const { control } = useFormContext()

  return (
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

      <Controller
        control={control}
        name="paymentMethod"
        rules={{ required: true }}
        render={({
          field: { onChange, ref, ...rest },
          fieldState: { error },
        }) => (
          <RadioGroup.Root
            className={`${error?.type ? 'content invalid' : 'content'}`}
            onValueChange={onChange}
            ref={ref}
            {...rest}
          >
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
        )}
      ></Controller>
    </PaymentContainer>
  )
}
