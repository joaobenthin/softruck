import { TouchableOpacityProps, View } from 'react-native'

import { formatDateTime } from '../../../../utils/format-datetime'
import { formatDistance } from '../../../../utils/format-distance'
import { Container, Departure, Info, LicensePlate } from './styles'

type Props = TouchableOpacityProps & {
  item: {
    start_at: string
    distance: number
    stops: number
  }
  index: number
}

export function GpsItem({ item, index, onPress, ...rest }: Props) {
  return (
    <Container activeOpacity={0.7} onPress={onPress} {...rest}>
      <Info>
        <View>
          <LicensePlate>Parada {index + 1}</LicensePlate>
          <Departure>{formatDateTime(item.start_at)}</Departure>
        </View>

        <View style={{ alignItems: 'flex-end' }}>
          <Departure>Distância</Departure>
          <LicensePlate>{formatDistance(item.distance)}</LicensePlate>

          <Departure>Total de paradas</Departure>
          <LicensePlate>{item.stops}</LicensePlate>
        </View>
      </Info>
    </Container>
  )
}
