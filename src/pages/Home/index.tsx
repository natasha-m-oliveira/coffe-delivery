import { Card } from '../../components/Card'
import { CoffeeList } from './styles'

export function Home() {
  return (
    <div>
      <CoffeeList>
        <Card
          title="Expresso Tradicional"
          description="O tradicional café feito com água quente e grãos moídos"
          amount={9.9}
          image="espresso.png"
          tags={['Tradicional']}
        />
      </CoffeeList>
    </div>
  )
}
