import type { ReactNode } from 'react'
import './SectionHeading.css'

interface SectionHeadingProps {
  title: ReactNode
  lead?: string
  id?: string
}

export default function SectionHeading({ title, lead, id }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <h2 className="section-heading__title" id={id}>
        {title}
      </h2>
      {lead && <p className="section-heading__lead">{lead}</p>}
    </div>
  )
}
