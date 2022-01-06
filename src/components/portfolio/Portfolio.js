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
      <h1>Portfolio</h1>
      <ul>
        {list.map(item => (
          <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} />
        ))}
      </ul>
      <div className="container">
        {data.map((data) => (
          <div class="card">
            <div class="card-header">
              <img src={data.img} alt={data.alt} />
            </div>
            <div class="card-body">
              <span class={`tag ${data.tag}`}>{data.tag === 'html-css-js' ? 'html/css/js' : data.tag}</span>
              <h4>{data.title}</h4>
              <p>{data.description}</p>
              <div class="links">
                <a className='card-link github' href={data.github}><i class="fab fa-github"></i>Github</a>
                <a className='card-link' href={data.demo}>Demo</a>
              </div>
            </div>
          </div>
        ))}
        
      </div>
  </div>
  )
}
