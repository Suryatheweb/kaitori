import { company } from '../data/siteContent'
import SectionHeading from './SectionHeading'
import './Company.css'

export default function Company() {
  return (
    <section
      className="company section section--dark"
      id={company.id}
      aria-labelledby="company-heading"
    >
      <div className="container container--narrow">
        <SectionHeading title={company.heading} id="company-heading" />
        <dl className="company__table">
          {company.rows.map((row) => (
            <div className="company__row" key={row.label}>
              <dt className="company__label">{row.label}</dt>
              <dd className="company__value">{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
