import { useNavigate } from 'react-router-dom'
import ContactIcon from '../components/ContactIcon'
import SocialIcon from '../components/SocialIcon'
import Footer from '../components/Footer'
import { socialLinks } from '../data/socialLinks'

function ContactPage({ onChatClick }) {
  const navigate = useNavigate()
  return (
    <>
      <button className="back-btn" onClick={() => navigate(-1)}>←</button>
      <div className="scroll-indicator">
        <p>Scroll Down</p>
        <p>↓</p>
      </div>

      <section className="section contact">
      <h2>Get In Touch</h2>
      <p className="contact-intro">Let's collaborate and create something amazing together!</p>

      <div className="contact-container">
        {/* Contact Information */}
        <div className="contact-info">
          <h3>Contact Information</h3>

          <div className="info-item">
            <div className="info-icon">
              <ContactIcon type="email" />
            </div>
            <div>
              <h4>Email</h4>
              <a href="mailto:estherelochukwu01@gmail.com">estherelochukwu01@gmail.com</a>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <ContactIcon type="location" />
            </div>
            <div>
              <h4>Location</h4>
              <p>Lagos, Nigeria</p>
            </div>
          </div>

          <div className="follow-section">
            <h4>Follow Me</h4>
            <div className="follow-icons">
              {socialLinks.map((link, i) => (
                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="follow-icon" title={link.label}>
                  <SocialIcon type={link.type} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-container">
          <h3>Send Me a Message</h3>
          <form className="contact-form">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your name" required />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="your@email.com" required />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Tell me about your project..." rows="5" required></textarea>
            </div>

            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>

    <Footer onChatClick={onChatClick} />
    </>
  )
}

export default ContactPage
