import Header from '@components/Header'
import Footer from '@components/Footer'

type tLayout = {
  children: React.ReactNode
}

export default function Layout({ children }: tLayout) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
