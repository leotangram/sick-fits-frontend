import { useMutation, useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import useForm from '../lib/useForm'
import DisplayError from './ErrorMessage'
import Form from './styles/Form'

const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      id
      name
      description
      price
    }
  }
`

const UPDATE_PRODUCT_MUTATION = gql`
  mutation UPDATE_PRODUCT_MUTATION(
    $id: ID!
    $name: String
    $description: String
    $price: Int
  ) {
    updateProduct(
      id: $id
      data: { name: $name, description: $description, price: $price }
    ) {
      id
      name
      description
      price
    }
  }
`

const UpdateProduct = ({ id }) => {
  const { data, error, loading } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: {
      id
    }
  })

  const [
    updateProduct,
    { error: updateError, loading: updateLoading }
  ] = useMutation(UPDATE_PRODUCT_MUTATION)

  const { handleChange, inputs } = useForm(data?.Product)

  const { description, name, price } = inputs

  const handleSubmit = async e => {
    e.preventDefault()
    const res = await updateProduct({
      variables: {
        id,
        name,
        description,
        price
      }
    }).catch(console.error)
  }

  if (loading) return <p>Loading...</p>

  return (
    <Form onSubmit={handleSubmit}>
      <DisplayError error={error || updateError} />
      <fieldset aria-busy={updateLoading} disabled={updateLoading}>
        <label htmlFor="name">
          Name
          <input
            id="name"
            name="name"
            onChange={handleChange}
            placeholder="Name"
            type="text"
            value={name}
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            id="price"
            name="price"
            placeholder="Price"
            onChange={handleChange}
            type="number"
            value={price}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            id="description"
            name="description"
            placeholder="Description"
            onChange={handleChange}
            type="text"
            value={description}
          />
        </label>
        <button type="submit">Update product</button>
      </fieldset>
    </Form>
  )
}

export default UpdateProduct
