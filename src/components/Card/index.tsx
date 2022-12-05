import { ShoppingCart } from 'phosphor-react'
import { Button } from '../Button'
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
        <h3>{title}</h3>
        <p>{description}</p>
      </CardContent>

      <BuyContainer>
        <span>{amount.toLocaleString('pt-BR')}</span>

        <div>
          <Button variant="secondary">
            <ShoppingCart weight="fill" size={22} />
          </Button>
        </div>
      </BuyContainer>
    </CardContainer>
  )
}
