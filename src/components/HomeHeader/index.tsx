import { useNavigation } from '@react-navigation/native'
import { SignOut } from 'phosphor-react-native'
import { useTranslation } from 'react-i18next'
import { TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components/native'

import { Container, Greeting, Message, Name, Picture } from './styles'

export function HomeHeader() {
  const { t } = useTranslation()
  const { navigate } = useNavigation()
  const theme = useTheme()

  const pictureImage = 'https://github.com/joaobenthin.png'

  function handleLogOut() {
    navigate('SignIn')
  }

  return (
    <Container>
      <Picture source={{ uri: pictureImage }} />

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
