import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { useTheme, Box } from 'native-base'

// import { AuthRoutes } from './auth.routes'
import { AppRoutes } from './app.routes'

export function Routes() {
  const theme = DefaultTheme
  const { colors } = useTheme()
  theme.colors.background = colors.gray[700]

  return (
    <Box flex={1} bg={'gray.700'}>
      <NavigationContainer theme={theme}>
        <AppRoutes />
      </NavigationContainer>
    </Box>
  )
}
