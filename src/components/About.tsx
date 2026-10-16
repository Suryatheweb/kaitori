import { about } from '../data/siteContent'
import SectionHeading from './SectionHeading'
import './About.css'

export default function About() {
  return (
    <section className="about section" id={about.id} aria-labelledby="about-heading">
      <div className="container">
        <SectionHeading
          title={about.heading}
          lead={about.lead}
          id="about-heading"
        />
        <div className="about__body">
          {about.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
