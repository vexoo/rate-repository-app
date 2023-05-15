import { Pressable } from 'react-native'
import Text from './Text'
import { buttonTheme } from '../theme'

const Button = ({ onPress, text, color, ...props }) => {
  const style = color ? buttonTheme.redButton : buttonTheme.button
  return (
    <Pressable onPress={onPress} style={style} {...props}>
      <Text style={buttonTheme.buttonText}>{text}</Text>
    </Pressable>
  )
}

export default Button
