import useForm from '../lib/useForm'
import Form from './styles/Form'

const CreateProduct = props => {
  const {
    clearForm,
    handleChange,
    inputs: { description, image, name, price },
    resetForm
  } = useForm({
    description: '',
    image: '',
    name: 'Nice shoes',
    price: 38762,
    description: 'These are the best shoes!'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <fieldset>
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
