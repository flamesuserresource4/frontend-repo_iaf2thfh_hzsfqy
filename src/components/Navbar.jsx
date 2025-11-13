import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/agenda', label: 'Schedule' },
  { to: '/speakers', label: 'Speakers' },
  { to: '/sponsors', label: 'Sponsors' },
  { to: '/register', label: 'Register' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-blue-500 text-white font-bold">AC</span>
          <div className="leading-tight">
            <div className="font-bold text-gray-900">AWS Cloud Club</div>
            <div className="text-xs text-gray-500">Student Community Day 2025 • Ahmedabad</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map(n => (
            <NavLink key={n.to} to={n.to} className={({isActive})=>`text-sm font-medium ${isActive? 'text-indigo-600':'text-gray-600 hover:text-gray-900'}`}>{n.label}</NavLink>
          ))}
        </nav>
        <Link to="/register" className="ml-3 inline-flex items-center px-4 py-2 rounded-md bg-indigo-600 text-white text-sm font-semibold shadow hover:bg-indigo-700">Register</Link>
      </div>
    </header>
  )
}
