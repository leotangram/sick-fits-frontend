import { useMutation } from '@apollo/client'
import gql from 'graphql-tag'
import useForm from '../lib/useForm'
import DisplayError from './ErrorMessage'
import Form from './styles/Form'

const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
    # Which variables are getting passed in? And what types are they
    $name: String!
    $description: String!
    $price: Int!
    $image: Upload
  ) {
    createProduct(
      data: {
        name: $name
        description: $description
        price: $price
        status: "AVAILABLE"
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
      price
      description
      name
    }
  }
`

const CreateProduct = props => {
  const { clearForm, handleChange, inputs } = useForm({
    description: '',
    image: '',
    name: 'Nice shoes',
    price: 38762,
    description: 'These are the best shoes!'
  })

  const { description, image, name, price } = inputs

  const [createProduct, { loading, error, data }] = useMutation(
    CREATE_PRODUCT_MUTATION,
    {
      variables: inputs
    }
  )

  const handleSubmit = async e => {
    e.preventDefault()
    await createProduct()
    clearForm()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <DisplayError error={error} />
      <fieldset aria-busy={loading} disabled={loading}>
        <label htmlFor="image">
          Image
          <input
            id="image"
            name="image"
            onChange={handleChange}
            required
            type="file"
          />
        </label>
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
        <button type="submit">+ Add product</button>
      </fieldset>
    </Form>
  )
}

export default CreateProduct
