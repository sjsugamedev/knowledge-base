import React from 'react';
import './css/Home.css';
import Picture from './images/picture1.jpg';
import Article02 from './images/img_article02_thumbnail.jpg';
import Article03 from './images/img_article03_thumbnail.png';
import Article04 from './images/img_article04_thumbnail.png';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className = "home" alt = "">
      <div className="navbar">
        <div className="navbar-header">
          <Link className="navbar-title" to="/">Knowledge Base</Link>
        </div>
        <div className="navbar-collapse">
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><a href="https://sjsugamedev.com/">GameDev</a></li>
          </ul>
        </div>
      </div>

      <h1 className = "main-header">Game Design and Development Resources</h1>

      <div className = "home-feature-article-container">
       
       <div className = "home-featured">
         
         <h1>Featured</h1>
          <div>
            <h2 style={{fontWeight: "normal"},{textAlign: "center"}}>Featured articles coming soon!</h2>
          </div>
          {/* <div className = "grid-container">
            <div className = "feature-article">
              <img src = {Picture} className = "photo" alt =''></img>
              <h3>Head of Article</h3>
              <p> Exercitation voluptate amet magna veniam minim eu ex duis ipsum dolore dolor adipisicing. </p>
            </div>
            <div className = "feature-article">
              <img src = {Picture} className = "photo" alt =''></img>
              <h3>Head of Article</h3>
              <p> Exercitation voluptate amet magna veniam minim eu ex duis ipsum dolore dolor adipisicing. </p>
            </div>
            <div className = "feature-article">
              <img src = {Picture} className = "photo" alt =''></img>
              <h3>Head of Article</h3>
              <p> Exercitation voluptate amet magna veniam minim eu ex duis ipsum dolore dolor adipisicing. </p>
            </div>
          </div> */}
         </div>
      </div>
       
       
         
        <div className = "home-all-articles" alt = "">
          <div className="home-all-article-container">
            <div className="links">
              <h3 className = "headers">All Articles</h3>
              {/* <a href="">Tutorial</a>
              <a href="">Devs Log</a>
              <a href="">News</a>
              <a href="">Research</a> */}
            </div>
            
            <div className = "home-all-article-grid">

            <Link to="/interview-with-michael-tucker">
                <div className = "all-article">
                  <div className="thumbnail">
                    <img src = {Article04} className = "photo" alt =''></img>
                  </div>
                  <h3>Interview with Double Fine Producer</h3>
                  <p>Learn about the challenges of managing a multi-disciplinary team under strict deadlines</p>
                </div>
              </Link>

              <Link to="/making-friends-in-48-hours">
                <div className = "all-article">
                  <div className="thumbnail">
                    <img src = {Article03} className = "photo" alt =''></img>
                  </div>
                  <h3>Making Friends in 48 hours</h3>
                  <p>Read to learn about SJSU's experience with making games during Global Game Jam 2021</p>
                </div>
              </Link>

              <Link to="/using-git-without-cmd">
                <div className = "all-article">
                  <div className="thumbnail">
                    <img src = {Article02} className = "photo" alt =''></img>
                  </div>
                  <h3>Using git without the command line</h3>
                  <p> This is a guide on how to use git without touching the command line. Basically you’ll be pressing buttons instead of writing commands.</p>
                </div>
              </Link>

              {/* <Link to="/using-git-without-cmd">
                <div className = "all-article">
                  <div className="thumbnail">
                    <img src = {Article02} className = "photo" alt =''></img>
                  </div>
                  <h3>Using git without the command line</h3>
                  <p> This is a guide on how to use git without touching the command line. Basically you’ll be pressing buttons instead of writing commands.</p>
                </div>
              </Link> */}
              

            </div>
            
          </div>
        </div>
         
    </div>
  );
}

export default Home;
