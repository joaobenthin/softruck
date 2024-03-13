import { useEffect, useRef, useState } from 'react'
import { Platform } from 'react-native'
import MapView, { AnimatedRegion, MarkerAnimated } from 'react-native-maps'

export function Map() {
  const duration = 5000
  const marker = useRef<MarkerAnimated>(null)
  const [coords] = useState<AnimatedRegion>(
    new AnimatedRegion({
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0,
      longitudeDelta: 0,
    }),
  )

  useEffect(() => {
    if (Platform.OS === 'android') {
      if (marker.current) {
        marker.current.animateMarkerToCoordinate(
          { latitude: 37.781, longitude: -122.4324 },
          duration,
        )
      }
    } else {
      coords
        .timing({
          latitude: 37.78825,
          longitude: -122.4324,
          duration,
          useNativeDriver: true,
          latitudeDelta: 37.78825,
          longitudeDelta: -122.4324,
          toValue: { x: 37.78825, y: -122.4324 },
        })
        .start()
    }
  }, [marker, coords])
  return (
    <>
      <MapView
        style={{ width: '100%', height: '100%' }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <MarkerAnimated
          ref={marker}
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
        />
      </MapView>
    </>
  )
}
