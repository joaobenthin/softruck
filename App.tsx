import './src/config/i18n'

import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'

import { AppRoutes } from './src/routes'
import theme from './src/theme'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AppRoutes />
    </ThemeProvider>
  )
}
