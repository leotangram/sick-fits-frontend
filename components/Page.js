import PropTypes from 'prop-types'

const Page = ({ children, cool }) => (
  <div>
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
