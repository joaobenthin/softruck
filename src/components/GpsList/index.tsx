import { useNavigation } from '@react-navigation/native'
import { FlatList } from 'react-native'

import response from '../../../frontend_data_gps.json'
import { GpsItem } from './components/GpsItem'

export function GpsList() {
  const { navigate } = useNavigation()

  function handleSelectGpsItem() {
    navigate('routedetail')
  }

  return (
    <FlatList
      data={response.courses}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <GpsItem item={item} index={index} onPress={handleSelectGpsItem} />
      )}
    />
  )
}
