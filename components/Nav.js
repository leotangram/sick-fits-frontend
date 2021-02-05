import PropTypes from 'prop-types'
import Link from 'next/link'

const Nav = props => (
  <nav>
    <Link href="/products">Products</Link>
    <Link href="/sell">Sell</Link>
    <Link href="/orders">Orders</Link>
    <Link href="/account">Account</Link>
  </nav>
)

Nav.propTypes = {}

export default Nav
