import React from 'react'
import { View, StyleSheet } from 'react-native'
import Text from './Text'
import theme from '../theme'

const styles = StyleSheet.create({
  languageTag: {
    backgroundColor: theme.colors.primary,
    padding: 5,
    borderRadius: 5,
    alignSelf: 'flex-start',
    marginTop: 5
  },
  languageTagText: {
    color: theme.colors.languageTagText
  }
})

const ItemTitle = ({ repository }) => (
  <View>
    <Text fontWeight='bold' fontSize='subheading'>
      {repository.fullName}
    </Text>
    <Text color='textSecondary' testID='description'>
      {repository.description}
    </Text>
    <View style={styles.languageTag}>
      <Text style={styles.languageTagText} testID='language'>
        {repository.language}
      </Text>
    </View>
  </View>
)

export default ItemTitle
