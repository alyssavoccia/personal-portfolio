import React from 'react'
import './skills.scss';

export default function Skills() {
  return (
    <div className='skills' id='skills'>
      <h1 className="section-title">Skills</h1>
      <div className="skill-lists">
        <div className="skill-list">
          <ul>
            <li className="skill-list__item list-item-short">HTML5</li>
            <li className="skill-list__item list-item-short">CSS3</li>
            <li className="skill-list__item">JAVASCRIPT</li>
            <li className="skill-list__item list-item-short">REACT</li>
            <li className="skill-list__item">BOOTSTRAP</li>
            <li className="skill-list__item list-item-short">SASS</li>
          </ul>
        </div>
        <div className="skill-list">
          <ul>
            <li className="skill-list__item">NODE</li>
            <li className="skill-list__item list-item-short">PHP</li>
            <li className="skill-list__item list-item-long">MYSQL</li>
          </ul>
        </div>
        <div className="skill-list">
          <ul>
            <li className="skill-list__item list-item-short">GIT</li>
            <li className="skill-list__item list-item-long">GITHUB</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
