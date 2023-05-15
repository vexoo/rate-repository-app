import { Formik } from 'formik'
import FormikTextInput from './FormikTextInput'
import { View, StyleSheet } from 'react-native'
import { useNavigate } from 'react-router-native'
import * as yup from 'yup'
import Button from './Button'
import useSignIn from '../hooks/useSignIn'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15
  }
})

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required')
})

const initialValues = {
  username: '',
  password: ''
}

const SignIn = () => {
  const [signIn] = useSignIn()
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { username, password } = values
    try {
      const data = await signIn({ username, password })
      if (data) navigate('/')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <SignInContainer onSubmit={onSubmit} validationSchema={validationSchema} />
  )
}

export const SignInContainer = ({ onSubmit, validationSchema }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema ? validationSchema : null}
    >
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <FormikTextInput name='username' placeholder='Username' />
          <FormikTextInput
            name='password'
            placeholder='Password'
            secureTextEntry
          />
          <Button onPress={handleSubmit} text='Sign in' testID='sign-in' />
        </View>
      )}
    </Formik>
  )
}

export default SignIn
