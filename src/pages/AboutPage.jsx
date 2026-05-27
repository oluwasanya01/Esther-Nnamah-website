import { useNavigate } from 'react-router-dom'

function AboutPage() {
  const navigate = useNavigate()

  return (
    <>
      <button className="back-btn" onClick={() => navigate(-1)}>←</button>
      <section className="section about">
        <h2>About Me</h2>
      <div className="professional-summary">
        <p>
          Nnamah Esther Elochukwu is a multifaceted communicator and leader whose work sits at the intersection of faith, intellect, and creativity. She is a skilled content and creative writer, as well as the author of two books that reflect her deep commitment to personal growth, purpose, and spiritual awakening. With a voice that is both insightful and inspiring, she uses storytelling as a tool to challenge perspectives, ignite transformation, and encourage intentional living.
        </p>
        <p>
          As an ordained Pastor and teacher of God's Word, Esther carries a strong mandate to guide, disciple, and nurture individuals in their spiritual journeys. Her teachings are rooted in truth, clarity, and practical application, making them both relatable and impactful for diverse audiences. Beyond the pulpit, she is a compelling public speaker who communicates with conviction, wisdom, and grace, leaving lasting impressions wherever she ministers or speaks.
        </p>
        <p>
          Being a Microbiologist, Esther brings a disciplined and analytical mindset into her work, blending scientific precision with creative and spiritual depth. She currently serves as the Accountability Officer at Strengthened Generation Nation Church, where she plays a key role in fostering structure, responsibility, and growth within the community. In addition, she serves as the Country Manager for The Heritage Kids Community, where she is actively involved in shaping young minds and building a strong foundation for the next generation.
        </p>
        <p>
          At the core of everything she does is a deep passion for personal development, self-improvement, faith, excellence, and community impact. Esther is driven by a vision to raise individuals who are not only successful but also grounded in purpose, integrity, and a desire to positively influence the world around them.
        </p>
      </div>
      </section>
    </>
  )
}

export default AboutPage
