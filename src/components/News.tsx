import { news } from '../data/siteContent'
import './News.css'

export default function News() {
  return (
    <section
      className="news section section--soft"
      id="news"
      aria-labelledby="news-heading"
    >
      <div className="container news__inner">
        <h2 className="news__heading" id="news-heading">
          {news.title}
        </h2>
        <ul className="news__list">
          {news.items.map((item) => (
            <li className="news__item" key={`${item.date}-${item.title}`}>
              <a className="news__link" href={item.href}>
                <time className="news__date" dateTime={item.date.replace(/\./g, '-')}>
                  {item.date}
                </time>
                <span className="news__title">{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
