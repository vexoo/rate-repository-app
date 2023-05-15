import { useState, useContext, useEffect } from 'react'
import { Searchbar } from 'react-native-paper'
import SearchContext from '../contexts/SearchContext'
import { useDebounce } from 'use-debounce'

const Filter = () => {
  const [searchValue, setSearchValue] = useState('')
  const [debouncedSearchValue] = useDebounce(searchValue, 500)
  const { setFilter } = useContext(SearchContext)

  useEffect(() => {
    setFilter(debouncedSearchValue)
  }, [debouncedSearchValue])

  return (
    <Searchbar
      placeholder='Search repositories...'
      onChangeText={(text) => setSearchValue(text)}
      value={searchValue}
    />
  )
}

export default Filter
