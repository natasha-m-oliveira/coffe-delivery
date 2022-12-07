import { ForwardRefExoticComponent, RefAttributes } from 'react'
import { IconProps } from 'phosphor-react'
import { Text } from '../../../../components/Text'
import { IconContainer, ItemContainer } from './styles'

interface ItemProps {
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
  text: string
}

export function Item({ icon, text }: ItemProps) {
  const Comp = icon

  return (
    <ItemContainer>
      <IconContainer>
        <Comp weight="fill" />
      </IconContainer>
      <Text size="md">{text}</Text>
    </ItemContainer>
  )
}
