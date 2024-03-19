import { forwardRef, useImperativeHandle, useRef } from 'react'
import { Platform } from 'react-native'
import MapView, { MapMarker, Marker, Region } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'

import { Coordinate } from '../../screens/RouteDetail'
import { Course } from '../../types'
import { calculateMinutesDifference } from '../../utils/calculate-minutes-difference'
import { calculateVehicleDirection } from '../../utils/calculate-vehicle-direction'
import { getWaypoints } from '../../utils/get-waypoints'
import { VehicleMarker } from './components/VehicleMarker'

interface MapRef {
  animateMarkerToCoordinate: (coordinate: Coordinate) => void
}

interface MapProps {
  course: Course
}

const ANDROID_PLATFORM = Platform.OS === 'android'

const Map = forwardRef<MapRef, MapProps>(function Map(props, ref) {
  const { course } = props
  const mapRef = useRef<MapView>(null)
  const markerRef = useRef<MapMarker>(null)
  const mapViewDirectionsData = course.gps.map((gpsItem) => ({
    latitude: gpsItem.latitude,
    longitude: gpsItem.longitude,
  }))

  const initialLatitude = course.gps[0].latitude
  const initialLongitude = course.gps[0].longitude

  const lastIndex = course.gps.length - 1

  const MARKET_LIMIT_GOOGLE_MAPS = 25

  const endLatitude =
    course.gps.length > MARKET_LIMIT_GOOGLE_MAPS
      ? course.gps[MARKET_LIMIT_GOOGLE_MAPS].latitude
      : course.gps[lastIndex].latitude
  const endLongitude =
    course.gps.length > MARKET_LIMIT_GOOGLE_MAPS
      ? course.gps[MARKET_LIMIT_GOOGLE_MAPS].longitude
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

  const moveMapToRegion = (region: Region) => {
    if (mapRef.current) {
      mapRef.current.animateToRegion(region, 1000)
    }
  }

  const animateMarkerToCoordinate = (coordinate: Coordinate) => {
    if (ANDROID_PLATFORM) {
      if (markerRef.current) {
        markerRef.current?.animateMarkerToCoordinate(coordinate, averageSpeed)
      }
    } else {
      // TODO: iOS
    }

    moveMapToRegion({
      latitude: coordinate.latitude,
      longitude: coordinate.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    })
  }

  useImperativeHandle(ref, () => ({
    animateMarkerToCoordinate(coordinate) {
      animateMarkerToCoordinate(coordinate)
    },
  }))

  return (
    <>
      <MapView
        ref={mapRef}
        style={{ width: '100%', height: '50%' }}
        region={{
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
        >
          <VehicleMarker
            position={calculateVehicleDirection(
              mapViewDirectionsData[0].latitude,
              mapViewDirectionsData[0].longitude,
              toCoordinate.latitude,
              toCoordinate.longitude,
            )}
            vehicle={0}
          />
        </Marker>
        <MapViewDirections
          origin={{
            latitude: mapViewDirectionsData[0].latitude,
            longitude: mapViewDirectionsData[0].longitude,
          }}
          destination={{
            latitude: toCoordinate.latitude,
            longitude: toCoordinate.longitude,
          }}
          waypoints={getWaypoints(mapViewDirectionsData)}
          apikey="GOOGLE_MAPS_API_KEY"
          strokeWidth={3}
          strokeColor="blue"
        />
      </MapView>
    </>
  )
})

export default Map
