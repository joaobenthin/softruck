import { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { Platform } from 'react-native'
import MapView, { AnimatedRegion, MapMarker, Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'

import { Coordinate } from '../../screens/RouteDetail'
import { Course } from '../../types'
import { calculateMinutesDifference } from '../../utils/calculate-minutes-difference'

interface MapRef {
  animateMarkerToCoordinate: (coordinate: Coordinate) => void
}

interface MapProps {
  course: Course
}

const Map = forwardRef<MapRef, MapProps>(function Map(props, ref) {
  const { course } = props
  const markerRef = useRef<MapMarker>(null)
  const [coords] = useState<AnimatedRegion>(
    new AnimatedRegion({
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0,
      longitudeDelta: 0,
    }),
  )

  const mapViewDirectionsData = course.gps.map((gpsItem) => ({
    latitude: gpsItem.latitude,
    longitude: gpsItem.longitude,
  }))

  const initialLatitude = course.gps[0].latitude
  const initialLongitude = course.gps[0].longitude

  const lastIndex = course.gps.length - 1

  const endLatitude =
    course.gps.length > 25
      ? course.gps[25].latitude
      : course.gps[lastIndex].latitude
  const endLongitude =
    course.gps.length > 25
      ? course.gps[25].longitude
      : course.gps[lastIndex].longitude

  const toCoordinate = {
    latitude: endLatitude,
    longitude: endLongitude,
  }

  const minutesToTrip = calculateMinutesDifference(
    course.start_at,
    course.end_at,
  )
  const averageSpeed = (course.distance / minutesToTrip) * 10

  const animateMarkerToCoordinate = (coordinate: Coordinate) => {
    if (Platform.OS === 'android') {
      if (markerRef.current) {
        markerRef.current?.animateMarkerToCoordinate(coordinate, averageSpeed)
      }
    } else {
      // iOS
    }
  }

  useImperativeHandle(ref, () => ({
    animateMarkerToCoordinate(coordinate) {
      animateMarkerToCoordinate(coordinate)
    },
  }))

  return (
    <>
      <MapView
        style={{ width: '100%', height: '50%' }}
        initialRegion={{
          latitude: initialLatitude,
          longitude: initialLongitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          ref={markerRef}
          coordinate={{
            latitude: initialLatitude,
            longitude: initialLongitude,
          }}
        />
        <MapViewDirections
          origin={{
            latitude: mapViewDirectionsData[0].latitude,
            longitude: mapViewDirectionsData[0].longitude,
          }}
          destination={{
            latitude: toCoordinate.latitude,
            longitude: toCoordinate.longitude,
          }}
          waypoints={
            mapViewDirectionsData.length > 25
              ? mapViewDirectionsData.slice(1, 25)
              : mapViewDirectionsData.slice(1, -1)
          }
          strokeWidth={3}
          strokeColor="blue"
        />
      </MapView>
    </>
  )
})

export default Map
