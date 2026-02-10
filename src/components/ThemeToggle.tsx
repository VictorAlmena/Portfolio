import { FaMoon } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'
import './ThemeToggle.css'

function SunIcon() {
  return (
    <svg
      className="theme-toggle-icon theme-toggle-icon-svg"
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="8" x2="12" y2="2" />
      <line x1="12" y1="16" x2="12" y2="22" />
      <line x1="8" y1="12" x2="2" y2="12" />
      <line x1="16" y1="12" x2="22" y2="12" />
      <line x1="14.83" y1="9.17" x2="19.5" y2="4.5" />
      <line x1="9.17" y1="9.17" x2="4.5" y2="4.5" />
      <line x1="9.17" y1="14.83" x2="4.5" y2="19.5" />
      <line x1="14.83" y1="14.83" x2="19.5" y2="19.5" />
    </svg>
  )
}

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
          <SunIcon />
        ) : (
          <FaMoon className="theme-toggle-icon" aria-hidden />
        )}
      </button>
    </div>
  )
}
