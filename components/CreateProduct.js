import useForm from '../lib/useForm'

const CreateProduct = props => {
  const { clearForm, handleChange, inputs: {name, price, description}, resetForm } = useForm({
    name: 'Nice shoes',
    price: 38762,
    description: 'These are the best shoes!'
  })

  return (
    <form>
      <label htmlFor="name">
        Name
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="price">
        Price
        <input
          type="number"
          id="price"
          name="price"
          placeholder="Price"
          value={price}
          onChange={handleChange}
        />
      </label>
      <button type="button" onClick={clearForm}>Clear form</button>
      <button type="button" onClick={resetForm}>Reset form</button>
    </form>
  )
}

export default CreateProduct
