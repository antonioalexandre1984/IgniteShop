import type { AppProps } from 'next/app'
//import { Header } from '../components/Header'
import { globalStyles } from '../styles/global'
import { Container, Header } from '../styles/pages/app'
import Logo from '../assets/Logo.svg'
import Image from 'next/image'
import Link from 'next/link'
//import { Header } from '../components/Header'


globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href="/">
          <Image src={Logo} alt='' />
        </Link>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
