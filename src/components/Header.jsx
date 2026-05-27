import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SocialIcon from './SocialIcon'
import { socialLinks } from '../data/socialLinks'

function Header({ onChatClick }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrollingDown, setIsScrollingDown] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Detect scroll direction
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setIsScrollingDown(true)
      } else {
        // Scrolling up
        setIsScrollingDown(false)
      }
      setLastScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <button className={`mobile-menu-btn ${isScrollingDown ? 'hidden' : ''}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="home-link">Home</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link to="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
          <Link to="/portfolio" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</Link>
          <Link to="/events" onClick={() => setIsMobileMenuOpen(false)}>Events</Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          <div className="nav-icons">
            {socialLinks.map((link, i) => (
              <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="nav-icon" title={link.label}>
                <SocialIcon type={link.type} />
              </a>
            ))}
          </div>
        </nav>
        <button className="cta-button" onClick={onChatClick}>
          <span className="btn-text">Let's Connect</span>
          <svg className="btn-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
        <a href="https://wa.me/2348076352279" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
          <img src="/whatsapp.png" alt="WhatsApp" />
        </a>
      </div>
    </header>
  )
}

export default Header
