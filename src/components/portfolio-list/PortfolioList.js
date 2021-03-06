import React from 'react'
import './portfolioList.scss';

export default function PortfolioList({ title, active, setSelected, id }) {
  return (
    <li key={title} className={`portfolioList  ${active ? 'active' : ''}`} onClick={() => setSelected(id)}>
      {title}
    </li>
  )
}
