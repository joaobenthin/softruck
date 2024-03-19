import { IconProps } from 'phosphor-react-native'
import { useTheme } from 'styled-components'

import { Container } from './styles'

export type IconBoxProps = (props: IconProps) => JSX.Element

type Props = {
  icon: IconBoxProps
}

export function IconBox({ icon: Icon }: Props) {
  const { COLORS } = useTheme()

  return (
    <Container>
      <Icon size={24} color={COLORS.BLUE_100} />
    </Container>
  )
}
