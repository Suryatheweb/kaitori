import { assessment } from '../data/siteContent'
import SectionHeading from './SectionHeading'
import './Assessment.css'

interface AssessmentProps {
  /** Set true only on the first instance so in-page anchors stay unique. */
  withAnchor?: boolean
}

export default function Assessment({ withAnchor = false }: AssessmentProps) {
  return (
    <section
      className="assessment section section--soft"
      id={withAnchor ? assessment.id : undefined}
      aria-labelledby={withAnchor ? 'assessment-heading' : undefined}
    >
      <div className="container">
        <SectionHeading
          title={assessment.heading}
          id={withAnchor ? 'assessment-heading' : undefined}
        />
        <ul className="assessment__list">
          {assessment.options.map((option) => (
            <li className="assessment__item" key={option.title}>
              <a className="assessment__card" href={option.href}>
                <img
                  className="assessment__icon"
                  src={option.icon}
                  alt={option.iconAlt}
                  width={72}
                  height={72}
                  loading="lazy"
                />
                <span className="assessment__text">
                  <span className="assessment__lead">{option.lead}</span>
                  <span className="assessment__title">{option.title}</span>
                  <span className="assessment__note">{option.note}</span>
                </span>
                <span className="assessment__arrow" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
