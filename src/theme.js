import { Platform } from 'react-native'

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    appBar: '#24292e',
    border: '#ccc',
    languageTagText: '#fff',
    error: '#d73a4a'
  },
  fontSizes: {
    body: 14,
    subheading: 16
  },
  fonts: {
    main: Platform.select({
      ios: 'Arial',
      android: 'Roboto',
      default: 'System'
    })
  },
  fontWeights: {
    normal: '400',
    bold: '700'
  },
  separator: {
    height: 10,
    borderBottomWidth: 5,
    borderBottomColor: '#ccc'
  }
}

const buttonSettings = {
  borderRadius: 5,
  padding: 10,
  alignItems: 'center',
  marginHorizontal: 5
}

export const buttonTheme = {
  button: {
    ...buttonSettings,
    backgroundColor: theme.colors.primary
  },
  redButton: {
    ...buttonSettings,
    backgroundColor: theme.colors.error
  },
  buttonText: {
    color: theme.colors.languageTagText
  }
}

export default theme
