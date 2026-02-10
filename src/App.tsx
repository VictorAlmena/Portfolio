import './App.css'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      {/* 1. Header / Hero */}
      <Hero />

      {/* 2. Work Experience */}
      <Experience />

      {/* 3. Projects */}
      <Projects />

      {/* 4. Education */}
      <Education />

      {/* 5. Footer */}
      <Footer />
    </div>
  )
}

export default App