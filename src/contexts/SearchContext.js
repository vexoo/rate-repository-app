import { createContext } from 'react'

const SearchContext = createContext({
  filter: '',
  setFilter: () => {}
})

export default SearchContext
