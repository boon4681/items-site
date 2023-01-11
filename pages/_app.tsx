import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return <div className='px-5'>
    <Head>
      <title>Items | boon4681</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
    <div className='flex items-center w-full max-w-xl flex-col mx-auto py-5'>
      <div>
        Disclaimer
      </div>
      <div>
        Items and Itemsflower IS NOT AN OFFICIAL MINECRAFT PRODUCT. NOT APPROVED BY OR ASSOCIATED WITH MOJANG STUDIOS.
      </div>
      <div className='mt-10 text-sm'>made with ❤️ by boon4681</div>
    </div>
  </div>
}

export default MyApp

