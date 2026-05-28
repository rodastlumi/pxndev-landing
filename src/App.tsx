import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { WhatsAppFloat } from './components/layout/WhatsAppFloat'
import { Contact } from './components/sections/Contact'
import { Hero } from './components/sections/Hero'
import { Process } from './components/sections/Process'
import { Services } from './components/sections/Services'
import { WhatsAppSupport } from './components/sections/WhatsAppSupport'
import { WhyChoose } from './components/sections/WhyChoose'
import { useTheme } from './hooks/useTheme'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <a
        href="#inicio"
        className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:m-0 focus:h-auto focus:w-auto focus:overflow-visible focus:rounded-lg focus:bg-[var(--color-accent)] focus:px-4 focus:py-2 focus:text-white focus:[clip:auto]"
      >
        Saltar al contenido
      </a>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main className="pb-24">
        <Hero />
        <Services />
        <WhatsAppSupport />
        <WhyChoose />
        <Process />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

export default App
