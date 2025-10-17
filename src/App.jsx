import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTopButton from './components/ScrollToTopButton'
import CustomCursor from './components/CustomCursor'
import PageLoader from './components/PageLoader'
import PageTransition from './components/PageTransition'
import { ToastProvider } from './components/Toast'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import './index.css'

function AnimatedRoutes() {
  const location = useLocation()

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router>
      <ToastProvider>
        <PageLoader />
        <CustomCursor />
        <div style={{ width: '100%', overflow: 'hidden', background: '#ffffff' }}>
          <Header />
          <main style={{ width: '100%', margin: 0, padding: 0, marginTop: 0 }}>
            <AnimatedRoutes />
          </main>
          <Footer />
          <ScrollToTopButton />
        </div>
      </ToastProvider>
    </Router>
  )
}

export default App
