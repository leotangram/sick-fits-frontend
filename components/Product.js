import PropTypes from 'prop-types'
import Link from 'next/link'
import ItemStyles from './styles/ItemStyles'
import Title from './styles/Title'
import PriceTag from './styles/PriceTag'
import formatMoney from '../lib/formatMoney'
import DeletProduct from './DeletProduct'

const Product = ({
  description,
  id,
  name,
  photo: {
    image: { publicUrlTransformed }
  },
  price
}) => {
  return (
    <ItemStyles>
      <img src={publicUrlTransformed} alt={name} />
      <Title>
        <Link href={`/product/${id}`}>{name}</Link>
      </Title>
      <PriceTag>{formatMoney(price)}</PriceTag>
      <p>{description}</p>
      <div className="buttonList">
        <Link href={{ pathname: 'update', query: { id } }}>Edit ✏️</Link>
        <DeletProduct id={id}>Delete</DeletProduct>
      </div>
    </ItemStyles>
  )
}

Product.defaultProps = {
  description: '',
  id: '',
  name: '',
  price: 0,
  publicUrlTransformed: ''
}

Product.propTypes = {
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  publicUrlTransformed: PropTypes.string.isRequired
}

export default Product
