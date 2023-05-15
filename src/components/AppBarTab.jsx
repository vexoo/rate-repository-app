import { StyleSheet } from 'react-native'
import { Link } from 'react-router-native'
import Text from './Text'

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    bottom: 10,
    padding: 10,
		marginTop: 5
  }
})

const AppBarTab = ({ label, path, ...props }) => (
  <Link to={path} {...props}>
    <Text style={styles.title}>{label}</Text>
  </Link>
)

export default AppBarTab
