import { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker'

import SortContext from '../contexts/SortContext'

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 10
  },
  picker: {
    height: 50,
    width: '100%'
  }
})

const SortBar = () => {
  const { sortOption, setSortOption } = useContext(SortContext)

  const sortOptions = [
    { label: 'Latest repositories', value: 'latest' },
    { label: 'Highest rated repositories', value: 'highest' },
    { label: 'Lowest rated repositories', value: 'lowest' }
  ]

  const handleSortOptionChange = (itemValue) => {
    setSortOption(itemValue)
  }

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={sortOption}
        onValueChange={handleSortOptionChange}
        style={styles.picker}
      >
        {sortOptions.map((option) => (
          <Picker.Item
            key={option.value}
            label={option.label}
            value={option.value}
          />
        ))}
      </Picker>
    </View>
  )
}

export default SortBar
