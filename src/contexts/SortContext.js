import { createContext } from 'react'

const SortContext = createContext({
  sortOption: 'latest',
  setSortOption: () => {}
})

export default SortContext
