import { useId, useState } from 'react'
import { faq } from '../data/siteContent'
import SectionHeading from './SectionHeading'
import './Faq.css'

export default function Faq() {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(() => new Set())
  const baseId = useId()

  const toggle = (index: number) => {
    setOpenIndexes((prev) => {
      const next = new Set(prev)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }

  return (
    <section className="faq section" id={faq.id} aria-labelledby="faq-heading">
      <div className="container container--narrow">
        <SectionHeading title={faq.heading} lead={faq.lead} id="faq-heading" />
        <ul className="faq__list">
          {faq.items.map((item, index) => {
            const isOpen = openIndexes.has(index)
            const questionId = `${baseId}-q-${index}`
            const answerId = `${baseId}-a-${index}`
            return (
              <li className={`faq__item${isOpen ? ' is-open' : ''}`} key={item.question}>
                <h3 className="faq__question">
                  <button
                    type="button"
                    id={questionId}
                    className="faq__toggle"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => toggle(index)}
                  >
                    <span className="faq__marker" aria-hidden="true">
                      Q
                    </span>
                    <span className="faq__question-text">{item.question}</span>
                    <span className="faq__icon" aria-hidden="true" />
                  </button>
                </h3>
                <div
                  className="faq__answer"
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                >
                  <div className="faq__answer-inner">
                    <span className="faq__marker faq__marker--answer" aria-hidden="true">
                      A
                    </span>
                    <p className="faq__answer-text">{item.answer}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
        <div className="section-actions">
          <a className="btn btn--outline" href={faq.moreHref}>
            {faq.moreLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
