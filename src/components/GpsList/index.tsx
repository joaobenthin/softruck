import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { FlatList } from 'react-native'

import response from '../../../frontend_data_gps.json'
import { NativeStackParamList } from '../../routes'
import { GpsItem } from './components/GpsItem'

type GpsListNavigationProp = NativeStackNavigationProp<
  NativeStackParamList,
  'RouteDetail'
>

export function GpsList() {
  const { navigate } = useNavigation<GpsListNavigationProp>()

  function handleSelectGpsItem(item) {
    navigate('RouteDetail', {
      course: item,
    })
  }

  return (
    <FlatList
      data={response.courses}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <GpsItem
          item={item}
          index={index}
          onPress={() => handleSelectGpsItem(item)}
        />
      )}
    />
  )
}
