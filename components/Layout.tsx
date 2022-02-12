import React, { ReactNode } from 'react'
import Head from 'next/head'
import Image from 'next/image'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Modoc Web' }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className="flex flex-wrap content-center justify-center h-20">
      <div className="flex content-center justify-center w-full h-20 py-4 pb-4 shadow-lg">
        <nav>
          <Image src="/logo-modoc.png" alt="Modoc" width={120} height={40} className="my-4" />
        </nav>
      </div>
    </header>
    {children}
  </>
)

export default Layout
