import { useState } from 'react'

const useForm = (initial = {}) => {
  // Create a state object for fields
  const [inputs, setInputs] = useState(initial)

  const handleChange = e => {
    let {value, name, type} = e.target
    if (type === 'number') {
      value = parseInt(value)
    }
    if (type === 'file') {
      value = e.target.files[0]
    }
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const resetForm = () => {
    setInputs(initial)
  }

  const clearForm = () => {
    const blankStatae = Object.fromEntries(Object.entries(inputs).map(([key]) => [key, '']))
    setInputs(blankStatae)
  }

  return {
    clearForm,
    handleChange,
    inputs,
    resetForm
  }
}

export default useForm