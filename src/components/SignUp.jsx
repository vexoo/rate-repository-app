import { Formik } from 'formik'
import FormikTextInput from './FormikTextInput'
import { View, StyleSheet } from 'react-native'
import { useMutation } from '@apollo/client'
import { useNavigate } from 'react-router-native'
import { create_user } from '../graphql/mutations'
import useSignIn from '../hooks/useSignIn'
import Button from './Button'
import * as yup from 'yup'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15
  }
})

const initialValues = {
  username: '',
  password: '',
  passwordConfirm: ''
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .min(1)
    .max(30, 'Username maximum length: 30 characters'),
  password: yup
    .string()
    .required('Password is required')
    .min(5, 'Password minimum length: 5 characters')
    .max(50, 'Password maximum length: 50 characters'),
  passwordConfirm: yup
    .string()
    .required('Password confirmation is required')
    .oneOf([yup.ref('password')], 'Passwords must match')
})

const SignUp = () => {
  const [mutate] = useMutation(create_user)
  const [signIn] = useSignIn()
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { username, password } = values
    try {
      const { data } = await mutate({
        variables: { user: { username, password } }
      })
      if (data) {
        const result = await signIn({ username, password })
        if (result) {
          navigate('/')
        }
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <FormikTextInput name='username' placeholder='Username' />
          <FormikTextInput
            name='password'
            placeholder='Password'
            secureTextEntry
          />
          <FormikTextInput
            name='passwordConfirm'
            placeholder='Password confirmation'
            secureTextEntry
          />
          <Button onPress={handleSubmit} text='Sign up' />
        </View>
      )}
    </Formik>
  )
}

export default SignUp
