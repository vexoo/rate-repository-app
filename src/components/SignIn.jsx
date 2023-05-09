import React from 'react'
import { Formik } from 'formik'
import FormikTextInput from './FormikTextInput'
import { View, Pressable, StyleSheet } from 'react-native'
import { useNavigate } from "react-router-native"
import * as yup from 'yup'
import Text from './Text'
import theme from '../theme'
import useSignIn from '../hooks/useSignIn'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    padding: 10,
    alignItems: 'center'
  },
  buttonText: {
    color: theme.colors.languageTagText
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
    console.log(values)
    const { username, password } = values
    try {
      const data = await signIn({ username, password })
      console.log(data)
      navigate('/')
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
          <Pressable onPress={handleSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Sign in</Text>
          </Pressable>
        </View>
      )}
    </Formik>
  )
}

export default SignIn
