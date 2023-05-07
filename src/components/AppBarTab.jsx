import { StyleSheet, Pressable } from 'react-native'
import { Link } from 'react-router-native'
import Text from './Text'

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    bottom: 10,
		padding: 10
  }
})

const AppBarTab = ({ label, path }) => (
  <Pressable
    onPress={() => {
      console.log(label, 'pressed')
    }}
  >
    <Link to={path}>
      <Text style={styles.title}>{label}</Text>
    </Link>
  </Pressable>
)

export default AppBarTab
