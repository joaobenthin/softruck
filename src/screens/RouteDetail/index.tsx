import { RouteProp } from '@react-navigation/native'
import { Car, FlagCheckered } from 'phosphor-react-native'
import { useRef } from 'react'
import { View } from 'react-native'

import { Header } from '../../components/Header'
import Map from '../../components/Map'
import { NativeStackParamList } from '../../routes'
import { LocationInfo } from './LocationInfo'
import { Content, Line } from './styles'

export interface Coordinate {
  latitude: number
  longitude: number
}

interface MapMarkerRef {
  animateMarkerToCoordinate: (coordinate: Coordinate) => void
}

type RouteDetailScreenRouteProp = RouteProp<NativeStackParamList, 'RouteDetail'>

type RouteDetailProps = {
  route: RouteDetailScreenRouteProp
}

export function RouteDetail({ route }: RouteDetailProps) {
  const { course } = route.params
  const gpsLength = course.gps.length
  const addressInitial = course.gps[0].address
  const addressFinal = course.gps[gpsLength - 1].address
  const coordinateInitial = {
    latitude: course.gps[0].latitude,
    longitude: course.gps[0].longitude,
  }
  const coordinateFinal = {
    latitude: course.gps[gpsLength - 1].latitude,
    longitude: course.gps[gpsLength - 1].longitude,
  }

  const markerRef = useRef<MapMarkerRef>(null)

  const animateMarkerToCoordinate = (coordinate: Coordinate) => {
    if (markerRef.current && markerRef.current.animateMarkerToCoordinate) {
      markerRef.current.animateMarkerToCoordinate(coordinate)
    }
  }

  return (
    <View>
      <Header title="Parada" />
      <Map course={course} ref={markerRef} />
      <Content>
        <LocationInfo
          address={`Saída em ${addressInitial}`}
          icon={Car}
          onPress={() => animateMarkerToCoordinate(coordinateInitial)}
        />
        <Line />
        <LocationInfo
          address={`Chegada em ${addressFinal}`}
          icon={FlagCheckered}
          onPress={() => animateMarkerToCoordinate(coordinateFinal)}
        />
      </Content>
    </View>
  )
}
