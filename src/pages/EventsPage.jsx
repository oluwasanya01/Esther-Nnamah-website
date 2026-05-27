import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function EventsPage() {
  const navigate = useNavigate()
  const [currentEventSlide, setCurrentEventSlide] = useState(0)

  const events = [
    {
      id: 1,
      title: 'TikTok Live show',
      description: 'Join Esther for an exclusive TikTok live show where she shares insights, connects with her community, and discusses personal growth and spirituality.',
      link: 'https://www.tiktok.com/@_esther_nnamah?_r=1&_t=ZS-95OBRTDJiR0',
      image: '/event1.jpeg'
    }
  ]

  const nextEventSlide = () => {
    setCurrentEventSlide((prev) => (prev + 1) % events.length)
  }

  const prevEventSlide = () => {
    setCurrentEventSlide((prev) => (prev - 1 + events.length) % events.length)
  }

  return (
    <>
      <button className="back-btn" onClick={() => navigate(-1)}>←</button>
      <section className="section events-section">
        <h2>Upcoming Events</h2>
      <div className="events-carousel">
        <button className="slideshow-btn prev-btn" onClick={prevEventSlide}>
          ‹
        </button>
        <a href={events[currentEventSlide].link} target="_blank" rel="noopener noreferrer" className="event-card">
          <img src={events[currentEventSlide].image} alt={events[currentEventSlide].title} className="event-image" />
          <div className="event-content">
            <h3 className="event-title">{events[currentEventSlide].title}</h3>
            <p className="event-description">{events[currentEventSlide].description}</p>
          </div>
        </a>
        <button className="slideshow-btn next-btn" onClick={nextEventSlide}>
          ›
        </button>
      </div>
      </section>
    </>
  )
}

export default EventsPage
