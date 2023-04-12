import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Navbar from './Components/Navbar'
import Footer from './Components/Footer'


export default function App({ Component, pageProps }: AppProps) {
  
  return (
  <>
  <Navbar title="ChatNow"/>

  <Component {...pageProps} />
  <Footer/>
  </>)
}
