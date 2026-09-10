import { useState } from 'react'

// Reuses the same Web3Forms config/pattern as the homepage's "Next
// Opportunity" form (see NextOpportunity.jsx) so both forms deliver real
// email via the same Web3Forms access key.
import { WEB3FORMS_ACCESS_KEY, WEB3FORMS_ENDPOINT } from '../data/contact.js'

const interests = [
  'Aerospace engineering internships',
  'Undergraduate research',
  'Rocket structures and propulsion',
  'CAD and product design',
  'Advanced manufacturing',
]

export default function ContactPage() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('sending')

    const form = event.target
    const data = new FormData(form)
    data.append('access_key', WEB3FORMS_ACCESS_KEY)
    data.append('subject', 'New message from the Contact page')

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      const result = await response.json()

      if (result.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="contact-page">
      <div className="contact-page-inner">
        <div className="contact-info">
          <h1 className="contact-heading">
            Lets Get
            <span className="contact-heading-accent">Connected.</span>
          </h1>
          <p className="contact-subheading">What I'm interested in</p>
          <p className="contact-body">
            Opportunities where I can contribute to the design, analysis, fabrication, and
            testing of aerospace or mechanical systems.
          </p>
          <p className="contact-subheading">Open to internships and research conversations</p>
          <ul className="contact-interest-list">
            {interests.map((interest) => (
              <li key={interest}>
                <img src="/arrow-blue-flat.svg" alt="" className="contact-interest-arrow" />
                {interest}
              </li>
            ))}
          </ul>
        </div>

        <div className="contact-card">
          <div className="contact-card-glow" aria-hidden="true">
            <img src="/glow-ellipse-10.svg" alt="" />
          </div>
          <div className="contact-card-inner">
            <div className="contact-card-heading-block">
              <p className="eyebrow eyebrow--cyan">START A CONVERSATION</p>
              <p className="contact-card-text">
                Send a message using the form below and I'll get back to you by email.
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-fields">
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="contact-name">Full Name</label>
                    <input id="contact-name" type="text" name="name" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="contact-email">Email Address</label>
                    <input id="contact-email" type="email" name="email" required />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="contact-reason">Reason of Inquiry</label>
                  <input id="contact-reason" type="text" name="reason" required />
                </div>
                <div className="form-field">
                  <label htmlFor="contact-message">Message</label>
                  <textarea id="contact-message" name="message" required></textarea>
                </div>
              </div>

              <button type="submit" className="contact-submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Message'}
                <img src="/arrow-white.svg" alt="" className="contact-submit-arrow" />
              </button>

              {status === 'success' && (
                <p className="form-status form-status--success" role="status">
                  Thanks! Your message has been sent — I'll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="form-status form-status--error" role="alert">
                  Something went wrong sending your message. Please try again in a moment.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
