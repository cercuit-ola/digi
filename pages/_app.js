import 'bootstrap/dist/css/bootstrap.css';
import "../Components/button/button.module.scss"
import "../styles/globals.scss"

function MyApp({ Component, pageProps }) {
  return (
    // <Store>
      <Component {...pageProps} />
    // {/* </Store> */}

  )
}

export default MyApp
