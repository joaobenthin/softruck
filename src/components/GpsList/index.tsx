import { FlatList, Pressable, Text } from 'react-native'

import response from '../../../frontend_data_gps.json'
export function GpsList() {
  return (
    <FlatList
      data={response.courses}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <Pressable key={index}>
          <Text>Parada {index + 1}</Text>
          <Text>Saída às 16h</Text>
          <Text>Distancia</Text>
          <Text>{item.distance}</Text>
          <Text>Toal de Paradas</Text>
          <Text>{item.stops}</Text>
        </Pressable>
      )}
    />
  )
}
