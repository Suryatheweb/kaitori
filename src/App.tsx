import { useEffect, useState } from 'react'
import About from './components/About'
import Assessment from './components/Assessment'
import Company from './components/Company'
import Faq from './components/Faq'
import Flow from './components/Flow'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Items from './components/Items'
import MobileContactBar from './components/MobileContactBar'
import News from './components/News'
import Opening from './components/Opening'
import Price from './components/Price'
import Reasons from './components/Reasons'
import ContactPage from './pages/ContactPage'
import { getPath, installRouter, subscribe } from './lib/router'
import { site } from './data/siteContent'

const HOME_TITLE = `${site.name} | ブランド品・貴金属・時計などの買取査定`

export default function App() {
  const [path, setPath] = useState(getPath())
  const isContact = path.startsWith('/contact')

  useEffect(() => {
    const uninstall = installRouter()
    const unsubscribe = subscribe(setPath)
    return () => {
      uninstall()
      unsubscribe()
    }
  }, [])

  useEffect(() => {
    document.title = isContact ? `お問い合わせ | ${site.name}` : HOME_TITLE
  }, [isContact])

  return (
    <>
      <Opening />
      <Header />
      <main id="main-content">
        {isContact ? (
          <ContactPage />
        ) : (
          <>
            <Hero />
            <News />
            <About />
            <Assessment withAnchor />
            <Items />
            <Price />
            <Reasons />
            <Assessment />
            <Flow />
            <Faq />
            <Company />
          </>
        )}
      </main>
      <Footer />
      <MobileContactBar />
    </>
  )
}
