import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <div>
    <h3>app</h3>
    <Component {...pageProps} />
  </div>
}

export default MyApp