import { FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'
import './ThemeToggle.css'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div className="language-switcher">
      <button
        type="button"
        className="language-switcher-button"
        onClick={toggleTheme}
        aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
        title={isDark ? 'Modo claro' : 'Modo oscuro'}
      >
        {isDark ? (
          <FaSun className="theme-toggle-icon" aria-hidden />
        ) : (
          <FaMoon className="theme-toggle-icon" aria-hidden />
        )}
      </button>
    </div>
  )
}
