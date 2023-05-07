import theme from '../theme'
import { View, StyleSheet } from 'react-native'
import Text from './Text'

const styles = StyleSheet.create({
  detailItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 1
  },
  detailValue: {
    fontWeight: 'bold',
    fontSize: theme.fontSizes.subheading
  },
  detailLabel: {
    color: theme.colors.textSecondary
  }
})

const abbreviateNumber = (number) => {
  return number >= 1000 ? `${(number / 1000).toFixed(1)}k` : number
}

const ItemDetails = ({ value, label }) => (
  <View style={styles.detailItem}>
    <Text style={styles.detailValue}>{abbreviateNumber(value)}</Text>
    <Text style={styles.detailLabel}>{label}</Text>
  </View>
)

export default ItemDetails
