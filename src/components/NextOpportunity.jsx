import { useState } from 'react'
import { WEB3FORMS_ACCESS_KEY, WEB3FORMS_ENDPOINT } from '../data/contact.js'

export default function NextOpportunity() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('sending')

    const form = event.target
    const data = new FormData(form)
    data.append('access_key', WEB3FORMS_ACCESS_KEY)
    data.append('subject', 'New message from the Next Opportunity form')

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
    <section className="opportunity">
      <div className="opportunity-glow" aria-hidden="true">
        <img src="/glow-ellipse-5.svg" alt="" />
      </div>
      <div className="opportunity-inner">
        <div className="opportunity-content">
          <div className="opportunity-text">
            <div className="opportunity-heading-block">
              <p className="eyebrow eyebrow--cyan">NEXT OPPORTUNITY</p>
              <h2 className="section-heading">Let's build something that performs.</h2>
            </div>
            <p className="opportunity-description">
              I'm interested in aerospace internships, undergraduate research, and hands-on
              design or manufacturing opportunities.
            </p>
          </div>
          <form className="opportunity-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="opportunity-first-name">First Name</label>
                <input
                  id="opportunity-first-name"
                  type="text"
                  name="firstName"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="opportunity-last-name">Last Name</label>
                <input id="opportunity-last-name" type="text" name="lastName" required />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="opportunity-email">Email</label>
              <input id="opportunity-email" type="email" name="email" required />
            </div>
            <div className="form-field">
              <label htmlFor="opportunity-message">Message</label>
              <textarea id="opportunity-message" name="message" required></textarea>
            </div>

            <button type="submit" className="btn btn-primary form-submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
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
    </section>
  )
}
