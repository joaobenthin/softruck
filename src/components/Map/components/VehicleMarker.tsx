import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

interface VehicleMarkerProps {
  position: number
  vehicle: number
}

export const VehicleMarker: React.FC<VehicleMarkerProps> = ({
  position,
  vehicle,
}) => {
  const imageSize = 256

  const spriteX = (position * imageSize) / 8
  const spriteY = (vehicle * imageSize) / 8

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/vehicles.png')}
        style={[
          styles.marker,
          {
            width: imageSize,
            height: imageSize,
            left: -spriteX,
            top: -spriteY,
          },
        ]}
        resizeMode="cover"
        alt="Vehicle"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  marker: {
    position: 'absolute',
  },
})
