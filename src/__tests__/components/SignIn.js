import {
  render,
  screen,
  fireEvent,
  waitFor
} from '@testing-library/react-native'
import { SignInContainer } from '../../components/SignIn'

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      const onSubmit = jest.fn()
      render(<SignInContainer onSubmit={onSubmit} />)

      const usernameInput = screen.getByPlaceholderText('Username')
      const passwordInput = screen.getByPlaceholderText('Password')
      const submitButton = screen.getByTestId('sign-in')

      fireEvent.changeText(usernameInput, 'matti')
      fireEvent.changeText(passwordInput, 'password')
      fireEvent.press(submitButton)

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1)
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: 'matti',
          password: 'password'
        })
      })
    })
  })
})
