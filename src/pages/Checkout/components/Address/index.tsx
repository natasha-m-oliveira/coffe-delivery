import axios from 'axios'
import { MapPinLine } from 'phosphor-react'
import { FocusEvent, useState } from 'react'
import { InputText } from '../../../../components/InputText'
import { Text } from '../../../../components/Text'
import { ShippingAddress } from '../../../../reducers/cart/reducer'
import { AddressContainer } from './styles'

export function Address() {
  const [address, setAddress] = useState<ShippingAddress>({} as ShippingAddress)

  async function handleFindAddress({ target }: FocusEvent<HTMLInputElement>) {
    const validBRZip = /^[0-9]{5}-?[0-9]{3}$/

    if (!target.value.match(validBRZip)) return

    // const response = await axios(
    //   `https://viacep.com.br/ws/${target.value}/json/`,
    // )
    // const { cep, logradouro, bairro, localidade, uf } = response.data
    // setAddress({
    //   zip: cep,
    //   street: logradouro,
    //   district: bairro,
    //   city: localidade,
    //   state: uf,
    // })
  }
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
        <InputText placeholder="CEP" required onBlur={handleFindAddress} />
        <InputText
          placeholder="Rua"
          required
          value={address.street || ''}
          readOnly
        />
        <InputText placeholder="Número" required />
        <InputText placeholder="Complemento" />
        <InputText
          placeholder="Bairro"
          required
          value={address.district || ''}
          readOnly
        />
        <InputText
          placeholder="Cidade"
          required
          value={address.city || ''}
          readOnly
        />
        <InputText
          placeholder="UF"
          required
          value={address.state || ''}
          readOnly
        />
      </div>
    </AddressContainer>
  )
}
