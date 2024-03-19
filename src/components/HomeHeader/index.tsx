import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { SignOut } from 'phosphor-react-native'
import { useTranslation } from 'react-i18next'
import { TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components/native'

import { Routes } from '../../constants/routes'
import { NativeStackParamList } from '../../routes'
import { Container, Greeting, Message, Name, Picture } from './styles'

type HomeHeaderNavigationProp = NativeStackNavigationProp<
  NativeStackParamList,
  Routes.SIGN_IN
>

export function HomeHeader() {
  const { t } = useTranslation()
  const { navigate } = useNavigation<HomeHeaderNavigationProp>()
  const theme = useTheme()

  const PICTURE_IMAGE = 'https://github.com/joaobenthin.png'

  function handleLogOut() {
    navigate(Routes.SIGN_IN)
  }

  return (
    <Container>
      <Picture source={{ uri: PICTURE_IMAGE }} />

      <Greeting>
        <Message>{t('homeHeader.hello')}</Message>
        <Name>João</Name>
      </Greeting>

      <TouchableOpacity activeOpacity={0.7} onPress={handleLogOut}>
        <SignOut size={32} color={theme.COLORS.WHITE} />
      </TouchableOpacity>
    </Container>
  )
}
