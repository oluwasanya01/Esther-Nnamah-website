import { useNavigate } from 'react-router-dom'

function ServicesPage() {
  const navigate = useNavigate()

  return (
    <>
      <button className="back-btn" onClick={() => navigate(-1)}>←</button>
      <section className="section services">
        <h2>My Services</h2>
      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon"></div>
          <h3>Social Media Strategy</h3>
          <p>Comprehensive strategies for TikTok, Instagram, Facebook and more</p>
        </div>
        <div className="service-card">
          <div className="service-icon"></div>
          <h3>Content Creation</h3>
          <p>Engaging, authentic content that resonates with your audience</p>
        </div>
        <div className="service-card">
          <div className="service-icon"></div>
          <h3>Personal Branding</h3>
          <p>Build your unique brand identity and establish authority</p>
        </div>
        <div className="service-card">
          <div className="service-icon"></div>
          <h3>Public Speaking</h3>
          <p>Compelling presentations and speaking engagements that inspire and engage audiences</p>
        </div>
        <div className="service-card">
          <div className="service-icon"></div>
          <h3>Video Content</h3>
          <p>Professional video content optimized for social platforms</p>
        </div>
        <div className="service-card">
          <div className="service-icon"></div>
          <h3>Brand Consulting</h3>
          <p>Expert guidance on brand positioning and digital presence</p>
        </div>
      </div>
      </section>
    </>
  )
}

export default ServicesPage
