import Link from 'next/link'
import styled from 'styled-components'
import Nav from './Nav'

const Logo = styled.h1`
  background-color: red;
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  transform: skew(-2deg);
  z-index: 2;
  a {
    color: white;
    padding: 0.5rem 1rem;
    text-decoration: none;
    text-transform: uppercase;
  }
`

const HeaderStyles = styled.header`
  .bar {
    align-items: center;
    border-bottom: 10px solid var(--black, black);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
  }

  .sub-bar {
    border-bottom: 1px solid var(--black, black);
    display: grid;
    grid-template-columns: 1fr auto;
  }
`

const Header = () => (
  <HeaderStyles>
    <div className="bar">
      <Logo>
        <Link href="/">Sick fits</Link>
      </Logo>
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <Nav />
  </HeaderStyles>
)

export default Header
