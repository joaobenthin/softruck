import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import i18n from '../../config/i18n'
import { Languages } from '../../types'
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

export function SignIn() {
  const { t } = useTranslation()
  const { navigate } = useNavigation()
  const [languageSelected, setLanguageSelected] = useState<Languages | null>(
    null,
  )

  function handleSelectLanguage(language: Languages) {
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
            selected={languageSelected === 'pt'}
            onPress={() => handleSelectLanguage('pt')}
          >
            {t('signIn.pt')}
          </LanguageText>
        </LanguageTextButton>
        <LanguageTextButton>
          <LanguageText
            selected={languageSelected === 'en'}
            onPress={() => handleSelectLanguage('en')}
          >
            {t('signIn.en')}
          </LanguageText>
        </LanguageTextButton>

        <LanguageTextButton>
          <LanguageText
            selected={languageSelected === 'es'}
            onPress={() => handleSelectLanguage('es')}
          >
            {t('signIn.es')}
          </LanguageText>
        </LanguageTextButton>
      </LanguageWrapper>

      <NextButtonWrapper>
        <NextButton
          disabled={!languageSelected}
          onPress={() => navigate('Home')}
        >
          <NextButtonText>{t('signIn.nextButton')}</NextButtonText>
        </NextButton>
      </NextButtonWrapper>
    </Container>
  )
}
