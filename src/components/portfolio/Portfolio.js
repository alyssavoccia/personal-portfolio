/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './portfolio.scss';

export default function Portfolio() {
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        <li className='active'>Featured</li>
        <li>React</li>
        <li>HTML/CSS/JS</li>
        <li>Treehouse Techdegree</li>
      </ul>
      <div className="container">
        <div class="card">
          <div class="card-header">
            <img src="assets/lax-dashboard.png" alt="Lax Dashboard" />
          </div>
          <div class="card-body">
            <span class="tag tag-react">React</span>
            <h4>Lax Dashboard</h4>
            <p>
              Dashboard proejct created using React and Material UI, and Firebase. Users are able to login with authentication through Firebase and see how their metrics match up against others. This app is suited for college/club teams, as well as high school students who want to sign up and see how they match up with others across the country.
            </p>
            <div class="links">
              <a className='card-link github' href="https://github.com/alyssavoccia/lax-dashboard"><i class="fab fa-github"></i>Github</a>
              <a className='card-link' href="https://alyssavoccia.github.io/lax-dashboard/">Demo</a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <img src="assets/trainit.png" alt="Train It Log It" />
          </div>
          <div class="card-body">
            <span class="tag tag-html-css-js">HTML/CSS/JS</span>
            <h4>Train It Log It</h4>
            <p>
            Project created using JavaScript and Firebase that allows users to be able to sign up and record their workouts. Users are only able to enter the app once they have either signed up or logged into their existing account. It also includes a leaderboard so that users are able to see where they stand, the ability to add/remove friends.
            </p>
            <div class="links">
              <a className='card-link github' href="https://github.com/alyssavoccia/lax-dashboard"><i class="fab fa-github"></i>Github</a>
              <a className='card-link' href="https://alyssavoccia.github.io/lax-dashboard/">Demo</a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <img src="assets/crwn-clothing.png" alt="Crown Clothing" />
          </div>
          <div class="card-body">
            <span class="tag tag-react">React</span>
            <h4>Crwn Clothing</h4>
            <p>
            This project was completed during the Complete React Developer in 2022 course. Fictional clothing store created using React and Stripe. The user is able to sign up/sign in, view various directories, add items to their cart, and go through the checkout process.
            </p>
            <div class="links">
              <a className='card-link github' href="https://github.com/alyssavoccia/lax-dashboard"><i class="fab fa-github"></i>Github</a>
              <a className='card-link' href="https://alyssavoccia.github.io/lax-dashboard/">Demo</a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <img src="assets/employee-directory.JPG" alt="Employee Directory" />
          </div>
          <div class="card-body">
            <div className="tags">
              <span class="tag tag-treehouse">Treehouse</span>
              <span class="tag tag-html-css-js">HTML/CSS/JS</span>
            </div>
            <h4>Employee Directory</h4>
            <p>
              This project uses Flexbox and Fetch API to create a fictional employee directory with a modal popup for more information about the employee.
            </p>
            <div class="links">
              <a className='card-link github' href="https://github.com/alyssavoccia/lax-dashboard"><i class="fab fa-github"></i>Github</a>
              <a className='card-link' href="https://alyssavoccia.github.io/lax-dashboard/">Demo</a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <img src="assets/photo-gallery.jpg" alt="Photo Gallery" />
          </div>
          <div class="card-body">
            <div className="tags">
              <span class="tag tag-treehouse">Treehouse</span>
              <span class="tag tag-html-css-js">HTML/CSS/JS</span>
            </div>
            <h4>Photo Gallery</h4>
            <p>
              This project utilizes flexbox for a responsive layout the use of a jQuery plugin for a lightbox. The use of vanilla JavaScript allows the user to search/filter through the grid of images.
            </p>
            <div class="links">
              <a className='card-link github' href="https://github.com/alyssavoccia/lax-dashboard"><i class="fab fa-github"></i>Github</a>
              <a className='card-link' href="https://alyssavoccia.github.io/lax-dashboard/">Demo</a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <img src="assets/style-guide.jpg" alt="Stlye Guide" />
          </div>
          <div class="card-body">
            <div className="tags">
              <span class="tag tag-treehouse">Treehouse</span>
              <span class="tag tag-html-css-js">HTML/CSS/JS</span>
            </div>
            <h4>Style Guide</h4>
            <p>A style guide created using Sass to help aid a user in the development of a website.</p>
            <div class="links">
              <a className='card-link github' href="https://github.com/alyssavoccia/lax-dashboard"><i class="fab fa-github"></i>Github</a>
              <a className='card-link' href="https://alyssavoccia.github.io/lax-dashboard/">Demo</a>
            </div>
          </div>
        </div>
      </div>
  </div>
  )
}
