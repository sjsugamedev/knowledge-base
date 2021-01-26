import React from 'react';
import './css/Home.css';
import Picture from './images/picture1.jpg';
import Article02 from './images/img_article02_thumbnail.jpg'

 

function Home() {
  return (
    <div className = "home" alt = "">
      <div className="navbar">
        <div className="navbar-header">
          <a className="navbar-title" href="/">Knowledge Base</a>
        </div>
        <div className="navbar-collapse">
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="https://sjsugamedev.com/">GameDev</a></li>
          </ul>
        </div>
      </div>

      <h1 className = "main-header">Game Design and Development Resources</h1>

      <div className = "feature-article-container">
       
        <div className = "featured">
         
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
       
       
         
        <div className = "all-articles" alt = "">
          <div className="all-article-container">
            <div className="links">
              <h3 className = "headers">All Articles</h3>
              {/* <a href="">Tutorial</a>
              <a href="">Devs Log</a>
              <a href="">News</a>
              <a href="">Research</a> */}
            </div>
            
            <div className = "all-article-grid">
              <div className = "all-article">
                <div className="thumbnail">
                  <img src = {Article02} className = "photo" alt =''></img>
                </div>
                <h3>Using git without the command line</h3>
                <p> This is a guide on how to use git without touching the command line. Basically you’ll be pressing buttons instead of writing commands.</p>
              </div>
            </div>
          </div>
        </div>
         
    </div>
  );
}

export default Home;
