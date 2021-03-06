import Router from 'next/router'
import NProgress from 'nprogress'
import Page from '../components/Page'
import '../components/styles/nprogress.css'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const MyApp = ({ Component, pageProps }) => (
  <Page>
    <Component {...pageProps} />
  </Page>
)

export default MyApp
