import Header from '@/components/Header/Header'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='h-screen'>
        <Header/>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
