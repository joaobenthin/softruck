import { Car, FlagCheckered } from 'phosphor-react-native'
import { View } from 'react-native'

import { Header } from '../../components/Header'
import { Map } from '../../components/Map'
import { LocationInfo } from './LocationInfo'
import { Content, Line } from './styles'

export function RouteDetail({ route }) {
  const { course } = route.params
  const gpsLength = course.gps.length
  const addressInitial = course.gps[0].address
  const addressFinal = course.gps[gpsLength - 1].address

  function onAnimateMarkerToCoordinate() {}

  return (
    <View>
      <Header />
      <Map
        course={course}
        handleAnimateMarkerToCoordinate={onAnimateMarkerToCoordinate}
      />
      <Content>
        <LocationInfo
          address={`Saída em ${addressInitial}`}
          icon={Car}
          onPress={() => onAnimateMarkerToCoordinate()}
        />
        <Line />
        <LocationInfo
          address={`Chegada em ${addressFinal}`}
          icon={FlagCheckered}
        />
      </Content>
    </View>
  )
}
