import { StyleSheet, View } from 'react-native'
import { Route, Routes, Navigate } from 'react-router-native'
import RepositoryList from './RepositoryList'
import RepositoryPage from './RepositoryPage'
import AppBar from './AppBar'
import SignIn from './SignIn'
import SignUp from './SignUp'
import UserReviews from './UserReviews'
import CreateReview from './CreateReview'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1
  }
})

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path='/' element={<RepositoryList />} exact />
        <Route path='/signIn' element={<SignIn />} exact />
        <Route path='/signUp' element={<SignUp />} exact />
        <Route path='/myReviews' element={<UserReviews />} exact />
        <Route path='/createReview' element={<CreateReview />} exact />
        <Route path='*' element={<Navigate to='/' replace />} />
        <Route path='/repositories/:id' element={<RepositoryPage />} exact />
      </Routes>
    </View>
  )
}

export default Main
