import { Link } from 'react-router-dom'
import SocialIcon from '../components/SocialIcon'
import { socialLinks } from '../data/socialLinks'

function HomePage({ onChatClick }) {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <img src="/profile.jpg" alt="Esther Nnamah" className="hero-bg-image" />
        <div className="hero-content">
          <h1>Esther Nnamah</h1>
          <h2>Brand Strategist & Creative Writer</h2>
          <p>
            I create compelling content that tells your brand story. Specializing in social media strategy,
            personal branding, and digital storytelling to build authentic connections with your audience.
          </p>
          <div className="hero-buttons">
            <Link to="/portfolio" className="btn-primary" style={{ textDecoration: 'none' }}>
              View My Work
            </Link>
            <button className="btn-secondary" onClick={onChatClick}>
              Work With Me
            </button>
          </div>
          <div className="hero-socials">
            <span>Follow me:</span>
            {socialLinks.map((link, i) => (
              <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="social-icon" title={link.label}>
                <SocialIcon type={link.type} />
              </a>
            ))}
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-circle">
            <img src="/profile.png" alt="Esther Nnamah" />
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
