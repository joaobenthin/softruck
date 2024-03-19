import { useTranslation } from 'react-i18next'
import { TouchableOpacityProps, View } from 'react-native'

import { Course } from '../../../../types'
import { formatDateTime } from '../../../../utils/format-datetime'
import { formatDistance } from '../../../../utils/format-distance'
import { Container, Departure, Info, LicensePlate } from './styles'

type GpsItemProps = TouchableOpacityProps & {
  item: Course
  index: number
}

export function GpsItem({ item, index, onPress, ...rest }: GpsItemProps) {
  const { t } = useTranslation()

  return (
    <Container onPress={onPress} {...rest}>
      <Info>
        <View>
          <LicensePlate>
            {t('gpsList.gpsItem.stop')} {index + 1}
          </LicensePlate>
          <Departure>{formatDateTime(item.start_at)}</Departure>
        </View>

        <View style={{ alignItems: 'flex-end' }}>
          <Departure>{t('gpsList.gpsItem.distance')}</Departure>
          <LicensePlate>{formatDistance(item.distance)}</LicensePlate>

          <Departure>{t('gpsList.gpsItem.stopTotal')}</Departure>
          <LicensePlate>{item.stops}</LicensePlate>
        </View>
      </Info>
    </Container>
  )
}
