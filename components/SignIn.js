import { useMutation } from '@apollo/client'
import gql from 'graphql-tag'
import useForm from '../lib/useForm'
import DisplayError from './ErrorMessage'
import Form from './styles/Form'
import { CURRENT_USER_QUERY } from './User'

const SIGN_IN_MUTATION = gql`
  mutation SIGN_IN_MUTATION($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          email
          name
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        code
        message
      }
    }
  }
`

const SignIn = () => {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: ''
  })
  const { email, password } = inputs

  const [signin, { data, loading }] = useMutation(SIGN_IN_MUTATION, {
    variables: inputs,
    refetchQueries: [{ query: CURRENT_USER_QUERY }]
  })

  const handleSubmit = async e => {
    e.preventDefault()
    const res = await signin()
    resetForm()
  }

  const error = data?.authenticateUserWithPassword.__typename === "UserAuthenticationWithPasswordFailure" ? data?.authenticateUserWithPassword : undefined

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <h2>Sign in into your account</h2>
      <DisplayError error={error} />
      <fieldset>
        <label htmlFor="email">
          Email
          <input
            autoComplete="email"
            name="email"
            onChange={handleChange}
            placeholder="Your email address"
            type="email"
            value={email}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            autoComplete="password"
            name="password"
            onChange={handleChange}
            placeholder="Password"
            type="password"
            value={password}
          />
        </label>
        <button type="submit">Sign in!</button>
      </fieldset>
    </Form>
  )
}

export default SignIn
