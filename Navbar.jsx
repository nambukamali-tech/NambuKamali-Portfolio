import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <nav className="navbar" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            background: 'var(--glass-bg)',
            backdropFilter: 'blur(var(--glass-blur))',
            borderBottom: '1px solid var(--glass-border)',
            padding: '1rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <div className="logo" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent-primary)' }}>
                <span style={{ color: 'var(--text-primary)' }}></span>
            </div>

            {/* Desktop Menu */}
            <ul className="nav-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                {navLinks.map((link) => (
                    <li key={link.name} className="desktop-only">
                        <a href={link.href} style={{ color: 'var(--text-primary)', fontWeight: '500', transition: 'color 0.3s' }}
                            onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}>
                            {link.name}
                        </a>
                    </li>
                ))}
                <li><ThemeToggle /></li>
                <li className="mobile-toggle" onClick={toggleMenu} style={{ fontSize: '1.5rem', cursor: 'pointer', display: 'none' }}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </li>
            </ul>

            {/* Mobile Menu Styles embedded for simplicity, ideally in CSS */}
            <style>{`
        @media (max-width: 768px) {
          .desktop-only { display: none; }
          .mobile-toggle { display: block !important; }
          .nav-links { gap: 1rem; }
        }
      `}</style>

            {/* Mobile Dropdown (Simplified) */}
            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    width: '100%',
                    background: 'var(--bg-secondary)',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1.5rem',
                    borderBottom: '1px solid var(--glass-border)'
                }}>
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} onClick={() => setIsOpen(false)}
                            style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    )
}

export default Navbar
