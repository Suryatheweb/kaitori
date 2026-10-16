import { flow } from '../data/siteContent'
import SectionHeading from './SectionHeading'
import './Flow.css'

export default function Flow() {
  return (
    <section className="flow section" id={flow.id} aria-labelledby="flow-heading">
      <div className="container">
        <SectionHeading title={flow.heading} lead={flow.lead} id="flow-heading" />
        <ol className="flow__steps">
          {flow.steps.map((step) => (
            <li className="flow__step" key={step.number}>
              <p className="flow__step-badge">
                STEP <strong>{step.number}</strong>
              </p>
              <img
                className="flow__step-image"
                src={step.image}
                alt={step.imageAlt}
                width={800}
                height={533}
                loading="lazy"
              />
              <h3 className="flow__step-title">{step.title}</h3>
              <span className="flow__step-underline" aria-hidden="true" />
              <p className="flow__step-text">{step.body}</p>
            </li>
          ))}
        </ol>
        <div className="section-actions">
          <a className="btn btn--primary" href={flow.moreHref}>
            {flow.moreLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
