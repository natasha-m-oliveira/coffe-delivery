import axios from 'axios'
import { MapPinLine } from 'phosphor-react'
import { FocusEvent } from 'react'
import { useFormContext } from 'react-hook-form'
import { InputText } from '../../../../components/InputText'
import { Text } from '../../../../components/Text'
import { AddressContainer } from './styles'

export function Address() {
  const {
    register,
    setValue,
    setError,
    formState: { errors },
  } = useFormContext()

  async function handleFindAddress({ target }: FocusEvent<HTMLInputElement>) {
    try {
      const validBRZip = /^[0-9]{5}-?[0-9]{3}$/

      if (!target.value.match(validBRZip)) {
        return setError('zip', { type: 'custom', message: 'CEP inválido' })
      }

      const response = await axios(
        `https://viacep.com.br/ws/${target.value}/json/`,
      )

      const { logradouro, bairro, localidade, uf } = response.data

      setValue('street', logradouro)
      setValue('district', bairro)
      setValue('city', localidade)
      setValue('state', uf)
    } catch (error) {
      setError('zip', { type: 'custom', message: 'CEP inválido' })
    }
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
        <InputText
          {...register('zip', {
            required: true,
            pattern: /^[0-9]{5}-?[0-9]{3}$/,
          })}
          required
          placeholder="CEP"
          onBlur={handleFindAddress}
          error={errors.zip?.type as string}
        />
        <InputText
          {...register('street', {
            required: true,
          })}
          required
          placeholder="Rua"
          readOnly
          error={errors.zip?.type as string}
        />
        <InputText
          {...register('number', {
            required: true,
          })}
          required
          placeholder="Número"
          error={errors.zip?.type as string}
        />
        <InputText {...register('complement')} placeholder="Complemento" />
        <InputText
          {...register('district', {
            required: true,
          })}
          required
          placeholder="Bairro"
          readOnly
          error={errors.zip?.type as string}
        />
        <InputText
          {...register('city', {
            required: true,
          })}
          required
          placeholder="Cidade"
          readOnly
          error={errors.zip?.type as string}
        />
        <InputText
          {...register('state', {
            required: true,
          })}
          required
          placeholder="UF"
          readOnly
          error={errors.zip?.type as string}
        />
      </div>
    </AddressContainer>
  )
}
