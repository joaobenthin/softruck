import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../screens/Home'
import { RouteDetail } from '../screens/RouteDetail'
import { SignIn } from '../screens/SignIn'

export type NativeStackParamList = {
  Home: undefined
  SignIn: undefined
  RouteDetail: { course: any }
}

const { Navigator, Screen } = createNativeStackNavigator<NativeStackParamList>()

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Home" component={Home} />
        <Screen name="SignIn" component={SignIn} />
        <Screen name="RouteDetail" component={RouteDetail} />
      </Navigator>
    </NavigationContainer>
  )
}
