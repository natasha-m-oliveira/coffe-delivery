import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { Card } from '../../components/Card'
import { Text } from '../../components/Text'
import { Title } from '../../components/Title'
import { COFFEES } from '../../utils/coffees'
import { Item } from './components/Item'
import { CoffeeListContainer, HomeContainer, IntroContainer } from './styles'

const topics = [
  {
    icon: ShoppingCart,
    text: 'Compra simples e segura',
  },
  {
    icon: Timer,
    text: 'Entrega rápida e rastreada',
  },
  {
    icon: Package,
    text: 'Embalagem mantém o café intacto',
  },
  {
    icon: Coffee,
    text: 'O café chega fresquinho até você',
  },
]

export function Home() {
  return (
    <HomeContainer>
      <IntroContainer>
        <div className="description">
          <div>
            <Title size="xl" weight="extrabold" asChild>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            </Title>
            <Text size="lg" variant="tertiary">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </Text>
          </div>

          <div className="items">
            {topics.map(({ icon, text }) => (
              <Item key={text} icon={icon} text={text} />
            ))}
          </div>
        </div>

        <div className="image">
          <img src="intro.png" alt="" />
        </div>
      </IntroContainer>
      <CoffeeListContainer>
        <Title size="lg" weight="extrabold">
          Nossos Cafés
        </Title>
        <div className="list">
          {COFFEES.map((coffee) => (
            <Card key={coffee.id} variant="catalog" {...coffee} />
          ))}
        </div>
      </CoffeeListContainer>
    </HomeContainer>
  )
}
