import '../styles/globals.css'
import NavBar from '../components/navBar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* header */}
      <NavBar />
      {/* aside */}
      <Component {...pageProps} />
       {/* Footer */}
    </>
  )
}

export default MyApp
