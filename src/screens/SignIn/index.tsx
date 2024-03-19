import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import i18n from '../../config/i18n'
import { Language, Languages } from '../../constants/languages'
import { Routes } from '../../constants/routes'
import { NativeStackParamList } from '../../routes'
import {
  Container,
  LanguageChooseText,
  LanguageText,
  LanguageTextButton,
  LanguageWrapper,
  NextButton,
  NextButtonText,
  NextButtonWrapper,
  Title,
} from './styles'

type SignInNavigationProp = NativeStackNavigationProp<
  NativeStackParamList,
  Routes.HOME
>

export function SignIn() {
  const { t } = useTranslation()
  const { navigate } = useNavigation<SignInNavigationProp>()
  const [languageSelected, setLanguageSelected] = useState<Language | null>(
    null,
  )

  function handleSelectLanguage(language: Language) {
    setLanguageSelected(language)
    i18n.changeLanguage(language)
  }

  return (
    <Container>
      <Title>Softruck</Title>
      <LanguageWrapper>
        <LanguageChooseText>{t('signIn.chooseLanguage')}</LanguageChooseText>
        <LanguageTextButton>
          <LanguageText
            selected={languageSelected === 'PT'}
            onPress={() => handleSelectLanguage('PT')}
          >
            {t('signIn.pt')}
          </LanguageText>
        </LanguageTextButton>
        <LanguageTextButton>
          <LanguageText
            selected={languageSelected === 'EN'}
            onPress={() => handleSelectLanguage('EN')}
          >
            {t('signIn.en')}
          </LanguageText>
        </LanguageTextButton>

        <LanguageTextButton>
          <LanguageText
            selected={languageSelected === 'ES'}
            onPress={() => handleSelectLanguage('ES')}
          >
            {t('signIn.es')}
          </LanguageText>
        </LanguageTextButton>
      </LanguageWrapper>

      <NextButtonWrapper>
        <NextButton
          disabled={!languageSelected}
          onPress={() => navigate(Routes.HOME)}
        >
          <NextButtonText>{t('signIn.nextButton')}</NextButtonText>
        </NextButton>
      </NextButtonWrapper>
    </Container>
  )
}
