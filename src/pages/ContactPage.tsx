import { useState, type FormEvent } from 'react'
import { contact } from '../data/siteContent'
import './ContactPage.css'

function Badge({ required }: { required: boolean }) {
  return (
    <span className={`contact-form__badge${required ? ' is-required' : ''}`}>
      {required ? contact.requiredLabel : contact.optionalLabel}
    </span>
  )
}

/**
 * /contact — inquiry form page (mirrors the reference site's contact page).
 * Demo only: submission is prevented and no data is sent anywhere.
 */
export default function ContactPage() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="contact-page section" aria-labelledby="contact-page-heading">
      <div className="container container--narrow">
        <div className="section-heading">
          <h1 className="section-heading__title" id="contact-page-heading">
            {contact.heading}
          </h1>
          <p className="section-heading__lead">{contact.lead}</p>
        </div>

        <p className="contact-page__instruction">{contact.instruction}</p>

        {sent ? (
          <p className="contact-page__sent" role="status">
            {contact.sentMessage}
          </p>
        ) : (
          <form className="contact-form" onSubmit={onSubmit}>
            <div className="contact-form__row">
              <label className="contact-form__label" htmlFor="contact-name">
                {contact.fields.name.label}
                <Badge required />
              </label>
              <input
                className="contact-form__input"
                id="contact-name"
                name="name"
                type="text"
                required
                autoComplete="name"
              />
            </div>

            <div className="contact-form__row">
              <label className="contact-form__label" htmlFor="contact-kana">
                {contact.fields.kana.label}
                <Badge required />
              </label>
              <input className="contact-form__input" id="contact-kana" name="kana" type="text" required />
            </div>

            <div className="contact-form__row">
              <label className="contact-form__label" htmlFor="contact-zip">
                {contact.fields.zip.label}
                <Badge required />
              </label>
              <input
                className="contact-form__input contact-form__input--zip"
                id="contact-zip"
                name="zip"
                type="text"
                required
                inputMode="numeric"
                autoComplete="postal-code"
                placeholder="000-0000"
              />
            </div>

            <div className="contact-form__row">
              <label className="contact-form__label" htmlFor="contact-address">
                {contact.fields.address.label}
                <Badge required />
              </label>
              <input
                className="contact-form__input"
                id="contact-address"
                name="address"
                type="text"
                required
                autoComplete="street-address"
              />
            </div>

            <div className="contact-form__row">
              <label className="contact-form__label" htmlFor="contact-email">
                {contact.fields.email.label}
                <Badge required />
              </label>
              <input
                className="contact-form__input"
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
              />
            </div>

            <div className="contact-form__row">
              <label className="contact-form__label" htmlFor="contact-tel">
                {contact.fields.tel.label}
                <Badge required />
              </label>
              <input
                className="contact-form__input contact-form__input--tel"
                id="contact-tel"
                name="tel"
                type="tel"
                required
                inputMode="tel"
                autoComplete="tel"
              />
            </div>

            <div className="contact-form__row">
              <label className="contact-form__label" htmlFor="contact-datetime">
                {contact.fields.datetime.label}
                <Badge required={false} />
              </label>
              <input
                className="contact-form__input"
                id="contact-datetime"
                name="datetime"
                type="text"
                placeholder="例：2026年10月1日 14:00ごろ"
              />
            </div>

            <div className="contact-form__row">
              <label className="contact-form__label" htmlFor="contact-photos">
                {contact.fields.photos.label}
                <Badge required={false} />
              </label>
              <input
                className="contact-form__file"
                id="contact-photos"
                name="photos"
                type="file"
                accept="image/*"
                multiple
              />
            </div>

            <div className="contact-form__row">
              <label className="contact-form__label" htmlFor="contact-message">
                {contact.fields.message.label}
                <Badge required={false} />
              </label>
              <textarea
                className="contact-form__textarea"
                id="contact-message"
                name="message"
                rows={6}
              />
            </div>

            <div className="contact-form__privacy">
              <h2 className="contact-form__privacy-title">{contact.privacyHeading}</h2>
              <div className="contact-form__privacy-body">
                {contact.privacyBody.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <label className="contact-form__agree">
              <input className="contact-form__agree-input" type="checkbox" required />
              {contact.agreeLabel}
            </label>

            <div className="contact-form__submit">
              <button className="btn btn--primary" type="submit">
                {contact.submitLabel}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
