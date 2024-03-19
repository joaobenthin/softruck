import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Routes } from '../constants/routes'
import { Home } from '../screens/Home'
import { RouteDetail } from '../screens/RouteDetail'
import { SignIn } from '../screens/SignIn'
import { Course } from '../types'

export type NativeStackParamList = {
  HOME: undefined
  SIGN_IN: undefined
  ROUTE_DETAIL: { course: Course }
}

const { Navigator, Screen } = createNativeStackNavigator<NativeStackParamList>()

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name={Routes.SIGN_IN} component={SignIn} />
        <Screen name={Routes.HOME} component={Home} />
        <Screen name={Routes.ROUTE_DETAIL} component={RouteDetail} />
      </Navigator>
    </NavigationContainer>
  )
}
