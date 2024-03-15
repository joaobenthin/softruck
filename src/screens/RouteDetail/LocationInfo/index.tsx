import { IconBox, IconBoxProps } from '../../../components/IconBox'
import { Container, Info, Label } from './styles'

interface LocationInfoProps {
  address: string
  icon: IconBoxProps
}

export function LocationInfo({ address, icon }: LocationInfoProps) {
  return (
    <Container>
      <IconBox icon={icon} />

      <Info>
        <Label>{address}</Label>
      </Info>
    </Container>
  )
}
