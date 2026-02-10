import './App.css'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Footer from './components/Footer'
import {
  educationItems,
  experienceItems,
  heroData,
  projects
} from './data/portfolioData'

function App() {
  return (
    <div className="app">
      {/* 1. Header / Hero */}
      <Hero data={heroData} />

      {/* 2. Work Experience */}
      <Experience items={experienceItems} />

      {/* 3. Projects */}
      <Projects projects={projects} />

      {/* 4. Education */}
      <Education items={educationItems} />

      {/* 5. Footer */}
      <Footer />
    </div>
  )
}

export default App