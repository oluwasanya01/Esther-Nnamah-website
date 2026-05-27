import { Link } from 'react-router-dom'
import SocialIcon from './SocialIcon'
import { socialLinks } from '../data/socialLinks'

function Footer({ onChatClick }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section footer-brand">
          <h3>E.N</h3>
          <p>Brand Strategist & Creative Writer</p>
        </div>

        <div className="footer-section footer-nav">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section footer-connect">
          <h4>Connect</h4>
          <div className="footer-socials">
            {socialLinks.map((link, i) => (
              <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="footer-icon" title={link.label}>
                <SocialIcon type={link.type} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="desktop-copyright">&copy; 2026 Esther Nnamah. All rights reserved.</p>
        <p className="mobile-copyright">&copy; All rights reserved & Copyright to Esther Nnamah</p>
        <button className="footer-chat-btn" onClick={onChatClick}>
          Work With Me
        </button>
      </div>
    </footer>
  )
}

export default Footer
