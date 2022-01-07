import React from 'react'
import './resumeList.scss';

export default function PortfolioList({ title, active, setSelected, id }) {
  return (
    <li className={`resumeList  ${active ? 'active' : ''}`} onClick={() => setSelected(id)}>
      {title}
    </li>
  )
}