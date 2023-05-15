import { View, StyleSheet, ScrollView } from 'react-native'
import { useApolloClient, useQuery } from '@apollo/client'
import Constants from 'expo-constants'
import theme from '../theme'
import AppBarTab from './AppBarTab'
import { GET_USER } from '../graphql/queries'
import { useAuthStorage } from '../hooks/useAuthStorage'
import Text from './Text'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBar
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexGrow: 1,
    paddingLeft: 20,
    paddingRight: 20
  }
})

const AppBar = () => {
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()
  const { loading, error, data } = useQuery(GET_USER)

  if (loading) {
    return <Text>Loading...</Text>
  }

  if (error) {
    console.log(error)
    return <Text>Something went wrong...</Text>
  }

  const user = data?.me

  const handleLogout = async () => {
    await authStorage.removeAccessToken()
    apolloClient.resetStore()
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.tabContainer}>
        <AppBarTab label='Repositories' path='/' />
        {user ? (
          <>
            <AppBarTab label='Create a review' path='/createReview' />
            <AppBarTab label='My reviews' path='/myReviews' />
            <AppBarTab label='Sign out' path='/' onPress={handleLogout} />
          </>
        ) : (
          <>
            <AppBarTab label='Sign in' path='/signIn' />
            <AppBarTab label='Sign up' path='/signUp' />
          </>
        )}
      </ScrollView>
    </View>
  )
}

export default AppBar
