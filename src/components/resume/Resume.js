import React from 'react';
import { useState, useEffect } from 'react';
import './resume.scss';

import ResumeList from '../resume-list/ResumeList';
import { experienceResume, educationResume } from '../../resume-data';

export default function Resume() {
  const [selected, setSelected] = useState("experience");
  const [data, setData] = useState();

  const list = [
    {
      id: 'experience',
      title: 'Experience'
    },
    {
      id: 'education',
      title: 'Education'
    }
  ];

  useEffect(() => {
    switch (selected) {
      case 'experience':
        setData(experienceResume);
        break;
      case 'education':
        setData(educationResume);
        break;
      default:
        setData(experienceResume);
    }
  }, [selected])

  return (
    <div className='resume' id='resume'>
      <h1 className='section-title'>Resume</h1>
      <ul>
        {list.map(item => (
          <ResumeList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} />
        ))}
      </ul>
      <div className="container">
        {/* EXPERIENCE */}
        <div className="resume-section">
          {data ? data.map((data) => (
            <div className="item">
              <div className="item-title">
                <h6>{data.dates}</h6>
                <h2>{data.leftTitle}</h2>
              </div>
              <div className="item-info">
                <h2>{data.rightTitle}</h2>
                {data.points ? data.points.map((point => <p>{point}</p>)) : ''}
              </div>
            </div>
          )) : ''}
        </div>
      </div>
    </div>
  )
}
