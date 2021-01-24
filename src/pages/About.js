import React from 'react';
import './css/Articles.css';
import './css/About.css';

function About() {
  return (
    <div className="article-page">
      <div className="navbar">
        <div className="navbar-header">
          <a className="navbar-title" href="/">Knowledge Base</a>
        </div>
        <div className="navbar-collapse">
          <ul>
            <li><a href="/">About</a></li>
            <li><a href="https://sjsugamedev.com/">GameDev</a></li>
          </ul>
        </div>
      </div>

      <div className="page-body">
        <div className="page-grid">

          <div className="left">      
          </div>

          <div className="center">
            <div className="article">
              <div className="about-article-container">
                <div className="article-header">
                  <h1 className="article-title">About Knowledge Base</h1>
                </div>

                <div className="article-text">
                  <h3 className="about-article-heading">What is Knowledge Base</h3>
                  <p className="p-indent">
                  Knowledge Base is a collection of articles related to game design and development 
                  made by the members of the game development club at SJSU. The purpose of this site 
                  was to provide a space for the members of our club to share helpful resources and 
                  information to others. For recruiters and industry professionals Knowledge Base 
                  provides insight into the skills of our members and the challenges we are trying 
                  to overcome.
                  </p>
                  <h3 className="about-article-heading">The team</h3>
                  <p className="p-indent">
                  Knowledge Base was proposed and designed by Cole Pergerson. Anthony Sokry and Lee 
                  developed the first prototype. Special thanks to the president of the club, Edward 
                  Chang, the other officers of the club, and our club advisor, James Morgan. 
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="right">
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;