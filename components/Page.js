import PropTypes from 'prop-types'
import Header from './Header'

const Page = ({ children, cool }) => (
  <div>
    <Header />
    <h2>I am Page component</h2>
    <h3>{cool}</h3>
    {children}
  </div>
)

Page.propTypes = {
  cool: PropTypes.string,
  children: PropTypes.any,
}

export default Page
