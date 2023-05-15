import React from 'react'
import { View, Pressable, StyleSheet } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import FormikTextInput from './FormikTextInput'
import Text from './Text'
import { buttonTheme } from '../theme'
import useCreateReview from '../hooks/useCreateReview'
import { useNavigate } from 'react-router-native'

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  review: ''
}

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: 'white',
    padding: 15
  }
})

const validationSchema = yup.object().shape({
  ownerName: yup.string().required('Repository owner is required'),
  repositoryName: yup.string().required('Repository name is required'),
  rating: yup
    .number()
    .required('Rating is required')
    .min(0, 'Rating must be between 0 and 100')
    .max(100, 'Rating must be between 0 and 100'),
  review: yup.string()
})

const CreateReview = () => {
  const [createReview] = useCreateReview()
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, review: text } = values
    try {
      const data = await createReview({
        ownerName,
        repositoryName,
        rating,
        text
      })
      if (data) {
        navigate(`/repositories/${data.createReview.repositoryId}`)
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
        <View style={styles.formContainer}>
          <FormikTextInput name='ownerName' placeholder='Repository owner' />
          <FormikTextInput
            name='repositoryName'
            placeholder='Repository name'
          />
          <FormikTextInput
            name='rating'
            placeholder='Rating between 0 and 100'
          />
          <FormikTextInput
            name='review'
            placeholder='Review (optional)'
            multiline={true}
          />
          <Pressable onPress={handleSubmit} style={buttonTheme.button}>
            <Text style={buttonTheme.buttonText}>Create a review</Text>
          </Pressable>
        </View>
      )}
    </Formik>
  )
}

export default CreateReview
