import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { NativeRouter } from 'react-router-native'
import { ApolloProvider } from '@apollo/client'
import Constants from 'expo-constants'

import Main from './src/components/Main'
import createApolloClient from './src/utils/apolloClient'
import AuthStorage from './src/utils/authStorage'
import AuthStorageContext from './src/contexts/AuthStorageContext'
import SortContext from './src/contexts/SortContext'
import SearchContext from './src/contexts/SearchContext'

const authStorage = new AuthStorage()
const apolloClient = createApolloClient(authStorage)

const App = () => {
  const [sortOption, setSortOption] = useState('latest')
  const [filter, setFilter] = useState('')
  console.log(Constants.manifest)

  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <AuthStorageContext.Provider value={authStorage}>
            <SortContext.Provider value={{ sortOption, setSortOption }}>
              <SearchContext.Provider value={{ filter, setFilter }}>
                <Main />
              </SearchContext.Provider>
            </SortContext.Provider>
          </AuthStorageContext.Provider>
        </ApolloProvider>
      </NativeRouter>
      <StatusBar style='auto' />
    </>
  )
}

export default App
