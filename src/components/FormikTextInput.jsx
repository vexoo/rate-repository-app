import { StyleSheet } from 'react-native'
import { useField } from 'formik'

import TextInput from './TextInput'
import Text from './Text'
import theme from '../theme'

const inputStyle = {
  borderWidth: 1,
  borderRadius: 4,
  padding: 10,
  marginVertical: 5
}

const styles = StyleSheet.create({
  errorText: {
    marginBottom: 10,
    color: theme.colors.error,
    marginTop: -5
  },
  errorInput: {
    ...inputStyle,
    borderColor: theme.colors.error
  },
  input: {
    ...inputStyle,
    borderColor: theme.colors.border
  }
})

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)
  const showError = meta.touched && meta.error

  return (
    <>
      <TextInput
        style={[showError ? styles.errorInput : styles.input]}
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  )
}

export default FormikTextInput
