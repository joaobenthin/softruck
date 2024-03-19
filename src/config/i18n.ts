import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from '../locales/en.json'
import es from '../locales/es.json'
import pt from '../locales/pt.json'

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    PT: { translation: pt },
    EN: { translation: en },
    ES: { translation: es },
  },
  lng: 'PT',
  fallbackLng: ['PT', 'EN', 'ES'],
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
