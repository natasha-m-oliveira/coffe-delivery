import { ShoppingCart } from 'phosphor-react'
import { Button } from '../Button'
import { NumericInput } from '../NumericInput'
import { Text } from '../Text'
import { Title } from '../Title'
import {
  BuyContainer,
  CardContainer,
  CardContent,
  CardImage,
  CardTag,
} from './styles'

interface CardProps {
  title: string
  description: string
  amount: number
  image: string
  tags: string[]
  orientation?: 'horizontal' | 'vertical'
}

export function Card({ title, description, amount, image, tags }: CardProps) {
  return (
    <CardContainer>
      <CardImage>
        <img src={image} alt="" />
      </CardImage>

      <CardContent>
        {tags.map((tag) => (
          <CardTag key={tag}>{tag}</CardTag>
        ))}
        <Title size="sm" variant="secondary" asChild>
          <h3>{title}</h3>
        </Title>
        <Text size="xs" variant="secondary" align="center">
          {description}
        </Text>
      </CardContent>

      <BuyContainer>
        <span>
          {amount.toLocaleString('pt-BR', {
            style: 'decimal',
            minimumFractionDigits: 2,
          })}
        </span>

        <div>
          <NumericInput min={0} max={5} />
          <Button variant="secondary">
            <ShoppingCart weight="fill" size={22} />
          </Button>
        </div>
      </BuyContainer>
    </CardContainer>
  )
}
