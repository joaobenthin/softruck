import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { FlatList } from 'react-native'

import response from '../../../frontend_data_gps.json'
import { Routes } from '../../constants/routes'
import { NativeStackParamList } from '../../routes'
import { Course } from '../../types'
import { GpsItem } from './components/GpsItem'

type GpsListNavigationProp = NativeStackNavigationProp<
  NativeStackParamList,
  Routes.ROUTE_DETAIL
>

export function GpsList() {
  const { navigate } = useNavigation<GpsListNavigationProp>()

  function handleSelectGpsItem(item: Course) {
    navigate(Routes.ROUTE_DETAIL, {
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
