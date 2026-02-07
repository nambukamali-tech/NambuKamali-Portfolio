import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer style={{
            background: 'var(--bg-secondary)',
            padding: '2rem',
            textAlign: 'center',
            borderTop: '1px solid var(--glass-border)',
            marginTop: '4rem'
        }}>
            <div className="social-links" style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', transition: 'color 0.3s' }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>
                    <FaGithub />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', transition: 'color 0.3s' }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>
                    <FaLinkedin />
                </a>
                <a href="mailto:email@example.com" style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', transition: 'color 0.3s' }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>
                    <FaEnvelope />
                </a>
            </div>
            <p style={{ color: 'var(--text-secondary)' }}>
                © {new Date().getFullYear()} Full Stack Developer. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer
