import { ShoppingCart, Trash } from 'phosphor-react'
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

interface CatalogCardProperty {
  variant: 'catalog'
  title: string
  description: string
  amount: number
  image: string
  tags: string[]
}

interface CartCardProperty {
  variant: 'cart'
  title: string
  amount: number
  image: string
}

type CardProps = CatalogCardProperty | CartCardProperty

export function Card(props: CardProps) {
  const isForTheCatalog = props.variant === 'catalog'
  return (
    <CardContainer variant={props.variant}>
      <CardImage variant={props.variant}>
        <img src={props.image} alt="" />
      </CardImage>

      {isForTheCatalog ? (
        <>
          <CardContent>
            <CardTagsWrapper>
              {props.tags.map((tag) => (
                <CardTag key={tag}>{tag}</CardTag>
              ))}
            </CardTagsWrapper>

            <Title size="sm" variant="secondary" asChild>
              <h3>{props.title}</h3>
            </Title>

            <Text size="xs" variant="secondary" align="center">
              {props.description}
            </Text>
          </CardContent>

          <BuyContainer>
            <PriceContainer>
              {props.amount.toLocaleString('pt-BR', {
                style: 'decimal',
                minimumFractionDigits: 2,
              })}
            </PriceContainer>

            <ActionsContainer>
              <NumericInput min={0} max={5} />
              <Button variant="secondary">
                <ShoppingCart weight="fill" size={22} />
              </Button>
            </ActionsContainer>
          </BuyContainer>
        </>
      ) : (
        <CardDetails>
          <Text size="md" variant="tertiary">
            {props.title}
          </Text>
          <Text size="md" weight="bold" align="right">
            {props.amount.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </Text>
          <ActionsContainer>
            <NumericInput min={0} max={5} />
            <Button variant="neutral">
              <Trash size={16} />
              <Text size="xs">REMOVER</Text>
            </Button>
          </ActionsContainer>
        </CardDetails>
      )}
    </CardContainer>
  )
}
