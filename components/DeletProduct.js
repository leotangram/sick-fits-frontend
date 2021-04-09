import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

const DELETE_PRODUCT_MUTATION = gql`
  mutation DELETE_PRODUCT_MUTATION($id: ID!) {
    deleteProduct(id: $id) {
      id
      name
    }
  }
`

const update = (cache, payload) => {
  cache.evict(cache.identify(payload.data.deleteProduct))
}

const DeletProduct = ({ id, children }) => {
  const [deleteProduct, {error, loading}] = useMutation(DELETE_PRODUCT_MUTATION, {
    variables: {
      id,
    },
    update
  })

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this item?')) {
      deleteProduct().catch(error => alert(error.message))
    }
  }

  return (
    <button type="button" onClick={handleDelete} disabled={loading}>
      {children}
    </button>
  )
}

export default DeletProduct
