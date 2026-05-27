import { useState } from 'react'

function ChatModal({ isOpen, onClose }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [chatStarted, setChatStarted] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Esther's AI assistant. Feel free to ask me about brand strategy, content creation, social media, or her amazing projects!",
      sender: 'bot',
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const handleStartChat = (e) => {
    e.preventDefault()
    if (name.trim() && email.trim()) {
      setChatStarted(true)
    }
  }

  const handleSendMessage = async (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
    }

    setMessages([...messages, userMessage])
    setInput('')
    setLoading(true)

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': import.meta.env.VITE_CLAUDE_API_KEY,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: 'claude-3-5-sonnet-20241022',
          max_tokens: 1024,
          system: `You are Esther Nnamah's AI assistant. Esther is a talented Brand Strategist and Creative Writer specializing in social media marketing, personal branding, content creation, and digital strategy.

Esther's expertise includes:
- Content Creation (TikTok, Instagram, Facebook)
- Brand Strategy and Development
- Social Media Marketing
- Digital Marketing
- Personal Branding
- Influencer Marketing

Be helpful, friendly, and provide information about Esther's work, expertise, and services. Keep responses concise and professional.`,
          messages: [
            {
              role: 'user',
              content: input,
            },
          ],
        }),
      })

      const data = await response.json()

      if (data.content && data.content[0]) {
        const botMessage = {
          id: messages.length + 2,
          text: data.content[0].text,
          sender: 'bot',
        }
        setMessages((prev) => [...prev, botMessage])
      }
    } catch (error) {
      console.error('Chat error:', error)
      const errorMessage = {
        id: messages.length + 2,
        text: 'Sorry, I encountered an error. Please try again later.',
        sender: 'bot',
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="chat-modal-overlay" onClick={onClose}>
      <div className="chat-modal" onClick={(e) => e.stopPropagation()}>
        <div className="chat-header">
          <h3>Esther's Assistant</h3>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        {!chatStarted ? (
          <div className="chat-form-initial">
            <form onSubmit={handleStartChat}>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                required
              />
              <button type="submit" className="start-chat-btn">
                Start Chat
              </button>
            </form>
          </div>
        ) : (
          <>
            <div className="chat-messages">
              {messages.map((msg) => (
                <div key={msg.id} className={`chat-message ${msg.sender}`}>
                  <p>{msg.text}</p>
                </div>
              ))}
              {loading && (
                <div className="chat-message bot">
                  <p>Thinking...</p>
                </div>
              )}
            </div>
            <form className="chat-form" onSubmit={handleSendMessage}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me something..."
                disabled={loading}
              />
              <button type="submit" disabled={loading || !input.trim()}>
                Send
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

export default ChatModal
