import { useApolloClient, useMutation } from '@apollo/client'
import { authenticate } from '../graphql/mutations'
import { useContext } from 'react'

//import AuthStorageContext from '../contexts/AuthStorageContext'
import { useAuthStorage } from '../hooks/useAuthStorage'

const useSignIn = () => {
  const [mutate, result] = useMutation(authenticate)
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()

  const signIn = async ({ username, password }) => {
    // call the mutate function here with the right arguments
    const { data } = await mutate({
      variables: { credentials: { username, password } }
    })
    console.log(data)
    console.log(data.authenticate.accessToken)

    if (data?.authenticate) {
      await authStorage.setAccessToken(data.authenticate.accessToken)
      apolloClient.resetStore()
    }

    /*
		if (data && data.authenticate && data.authenticate.accessToken) {
      await authStorage.setAccessToken(data.authenticate.accessToken)
    }
		*/
    return data
  }

  return [signIn, result]
}

export default useSignIn
