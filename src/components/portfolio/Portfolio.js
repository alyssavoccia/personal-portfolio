/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { useState, useEffect } from 'react';
import './portfolio.scss';

import PortfolioList from '../portfolio-list/PortfolioList';
import { featuredPortfolio, reactPortfolio, htmlCssJsPortfolio, treehousePortfolio } from '../../portfolio-data';


export default function Portfolio() {
  const [selected, setSelected] = useState("featured"); 
  const [data, setData] = useState();

  const list = [
    {
      id: "featured",
      title: "Featured"
    },
    {
      id: "react",
      title: "React"
    },
    {
      id: "html-css-js",
      title: "HTML/CSS/JS"
    },
    {
      id: "treehouse",
      title: "Treehouse Techdegree"
    }
  ];

  useEffect(() => {
    switch (selected) {
      case 'featured':
        setData(featuredPortfolio);
        break;
      case 'react':
        setData(reactPortfolio);
        break;
      case 'html-css-js':
        setData(htmlCssJsPortfolio);
        break;
      case 'treehouse':
        setData(treehousePortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected])

  return (
    <div className='portfolio' id='portfolio'>
      <h1 className='section-title'>Portfolio</h1>
      <ul>
        {list.map(item => (
          <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} key={item.title} />
        ))}
      </ul>
      <div className="container">
        {data ? data.map((data) => (
          <div className="card" key={data.title}>
            <div className="card-header">
              <img src={data.img} alt={data.alt} />
            </div>
            <div className="card-body">
              <span className={`tag ${data.tag}`}>{data.tag === 'html-css-js' ? 'html/css/js' : data.tag}</span>
              <h4 className='project-title'>{data.title}</h4>
              <p className='project-description'>{data.description}</p>
              <div className="links">
                <a className='card-link github' href={data.github} target='_blank'><i className="fab fa-github"></i>Github</a>
                <a className='card-link' href={data.demo} target='_blank'>Demo</a>
              </div>
            </div>
          </div>
        )) : ''}
        
      </div>
  </div>
  )
}
