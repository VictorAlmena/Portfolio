import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'
import {
  educationItemsByLocale,
  experienceItemsByLocale,
  heroData,
  projectsByLocale,
  sectionLabelsByLocale,
  type Locale
} from './data/portfolioData'

function App() {
  const [locale, setLocale] = useState<Locale>('es')

  const labels = sectionLabelsByLocale[locale]

  return (
    <div className="app">
      <div className="top-bar">
        <ThemeToggle />
        <div className="language-switcher">
        <button
          type="button"
          className={`language-switcher-button ${locale === 'es' ? 'active' : ''}`}
          onClick={() => setLocale('es')}
        >
          ES
        </button>
        <button
          type="button"
          className={`language-switcher-button ${locale === 'en' ? 'active' : ''}`}
          onClick={() => setLocale('en')}
        >
          EN
        </button>
        </div>
      </div>

      {/* 1. Header / Hero */}
      <Hero data={heroData[locale]} />

      {/* 2. Work Experience */}
      <Experience title={labels.experienceTitle} items={experienceItemsByLocale[locale]} />

      {/* 3. Projects */}
      <Projects title={labels.projectsTitle} projects={projectsByLocale[locale]} />

      {/* 4. Education */}
      <Education title={labels.educationTitle} items={educationItemsByLocale[locale]} />

      {/* 5. Footer */}
      <Footer title={labels.contactTitle} />
    </div>
  )
}

export default App