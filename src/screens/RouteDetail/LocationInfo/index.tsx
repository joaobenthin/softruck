import { IconBox, IconBoxProps } from '../../../components/IconBox'
import { Container, Info, Label } from './styles'

interface LocationInfoProps {
  address: string
  icon: IconBoxProps
  onPress: () => void
}

export function LocationInfo({ address, icon, onPress }: LocationInfoProps) {
  return (
    <Container onPress={onPress}>
      <IconBox icon={icon} />

      <Info>
        <Label>{address}</Label>
      </Info>
    </Container>
  )
}
