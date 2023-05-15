import { useApolloClient, useMutation } from '@apollo/client'
import { authenticate } from '../graphql/mutations'
import { useAuthStorage } from '../hooks/useAuthStorage'

const useSignIn = () => {
  const [mutate, result] = useMutation(authenticate)
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({
      variables: { credentials: { username, password } }
    })

    if (data?.authenticate) {
      await authStorage.setAccessToken(data.authenticate.accessToken)
      apolloClient.resetStore()
    }
    return data
  }

  return [signIn, result]
}

export default useSignIn
