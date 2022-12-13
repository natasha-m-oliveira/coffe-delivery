import { ShoppingCart, Trash } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { Button } from '../Button'
import { NumericInput } from '../NumericInput'
import { Text } from '../Text'
import { Title } from '../Title'
import {
  ActionsContainer,
  BuyContainer,
  CardContainer,
  CardContent,
  CardDetails,
  CardImage,
  CardTag,
  CardTagsWrapper,
  PriceContainer,
} from './styles'

interface Coffee {
  id: string
  title: string
  description: string
  amount: number
  image: string
  tags: string[]
}

interface CatalogCardProperty {
  variant: 'catalog'
  coffee: Coffee
}

interface CartCardProperty {
  variant: 'cart'
  coffee: Omit<Coffee, 'description' | 'tags'> & {
    quantity: number
  }
}

type CardProps = CatalogCardProperty | CartCardProperty

export function Card({ variant, coffee }: CardProps) {
  const { addNewProduct, changeProductQuantityItems, removeProduct } =
    useContext(CartContext)

  const [quantityOfItems, setQuantityOfItems] = useState(1)

  function handleAddToCart() {
    addNewProduct({
      id: coffee.id,
      title: coffee.title,
      image: coffee.image,
      amount: coffee.amount,
      quantity: quantityOfItems,
    })
  }

  function handleRemoveToCart() {
    removeProduct(coffee.id)
  }

  function handleChangeQuantity(quantity: number) {
    changeProductQuantityItems(coffee.id, quantity)
  }

  return (
    <CardContainer variant={variant}>
      <CardImage variant={variant}>
        <img src={coffee.image} alt="" />
      </CardImage>

      {variant === 'catalog' ? (
        <>
          <CardContent>
            <CardTagsWrapper>
              {coffee.tags.map((tag) => (
                <CardTag key={tag}>{tag}</CardTag>
              ))}
            </CardTagsWrapper>

            <Title size="sm" variant="secondary" asChild>
              <h3>{coffee.title}</h3>
            </Title>

            <Text size="xs" variant="secondary" align="center" asChild>
              <p>{coffee.description}</p>
            </Text>
          </CardContent>

          <BuyContainer>
            <PriceContainer>
              {coffee.amount.toLocaleString('pt-BR', {
                style: 'decimal',
                minimumFractionDigits: 2,
              })}
            </PriceContainer>

            <ActionsContainer>
              <NumericInput onChange={(value) => setQuantityOfItems(value)} />
              <Button variant="secondary" onClick={handleAddToCart}>
                <ShoppingCart weight="fill" size={22} />
              </Button>
            </ActionsContainer>
          </BuyContainer>
        </>
      ) : (
        <CardDetails>
          <Text size="md" variant="tertiary">
            {coffee.title}
          </Text>
          <Text size="md" weight="bold" align="right">
            {coffee.amount.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </Text>
          <ActionsContainer>
            <NumericInput
              onChange={handleChangeQuantity}
              initialValue={coffee.quantity}
            />
            <Button variant="neutral" onClick={handleRemoveToCart}>
              <Trash size={16} />
              <Text size="xs">REMOVER</Text>
            </Button>
          </ActionsContainer>
        </CardDetails>
      )}
    </CardContainer>
  )
}
