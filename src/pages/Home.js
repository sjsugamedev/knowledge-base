import React from 'react';
import './css/Home.css';
import Picture from './images/picture1.jpg';

 

function Home() {
  return (
    <div className = "home" alt = "">
      <h1 className = "main-header">Game Design and Development Resources</h1>

      <div className = "feature-article-container">
       
       <div className = "featured">
         
         <h3>Featured</h3>
          <div className = "grid-container">
            <div className = "feature-article">
              <img src = {Picture} className = "photo" alt =''></img>
              <h4>Head of Article</h4>
              <p> Exercitation voluptate amet magna veniam minim eu ex duis ipsum dolore dolor adipisicing. </p>
            </div>
            <div className = "feature-article">
              <img src = {Picture} className = "photo" alt =''></img>
              <h4>Head of Article</h4>
              <p> Exercitation voluptate amet magna veniam minim eu ex duis ipsum dolore dolor adipisicing. </p>
            </div>
            <div className = "feature-article">
              <img src = {Picture} className = "photo" alt =''></img>
              <h4>Head of Article</h4>
              <p> Exercitation voluptate amet magna veniam minim eu ex duis ipsum dolore dolor adipisicing. </p>
            </div>
         </div>
         
      </div>
      </div>
       
       
         
        <div className = "all-articles" alt = "">
          <div className="all-article-container">
            <div className="links">
              <h3 className = "headers">All Articles</h3>
              <a href="">Tutorial</a>
              <a href="">Devs Log</a>
              <a href="">News</a>
              <a href="">Research</a>
            </div>
            
            <div className = "all-article-grid">
              <div className = "all-article">
                <img src = {Picture} className = "photo" alt =''></img>
                <h4>Head of Article</h4>
                <p> Exercitation voluptate amet magna veniam minim eu ex duis ipsum dolore dolor adipisicing.</p>
              </div>
              <div className = "all-article">
                <img src = {Picture} className = "photo" alt =''></img>
                <h4>Head of Article</h4>
                <p> Exercitation voluptate amet magna veniam minim eu ex duis ipsum dolore dolor adipisicing. </p>
              </div>
              <div className = "all-article">
                <img src = {Picture} className = "photo" alt =''></img>
                <h4>Head of Article</h4>
                <p> Exercitation voluptate amet magna veniam minim eu ex duis ipsum dolore dolor adipisicing. </p>
              </div>
              <div className = "all-article">
                <img src = {Picture} className = "photo" alt =''></img>
                <h4>Head of Article</h4>
                <p> Exercitation voluptate amet magna veniam minim eu ex duis ipsum dolore dolor adipisicing. </p>
              </div>
              <div className = "all-article">
                <img src = {Picture} className = "photo" alt =''></img>
                <h4>Head of Article</h4>
                <p> Exercitation voluptate amet magna veniam minim eu ex duis ipsum dolore dolor adipisicing. </p>
              </div>
              <div className = "all-article">
                <img src = {Picture} className = "photo" alt =''></img>
                <h4>Head of Article</h4>
                <p> Exercitation voluptate amet magna veniam minim eu ex duis ipsum dolore dolor adipisicing. </p>
              </div>
              <div className = "all-article">
                <img src = {Picture} className = "photo" alt =''></img>
                <h4>Head of Article</h4>
                <p> Exercitation voluptate amet magna veniam minim eu ex duis ipsum dolore dolor adipisicing. </p>
              </div>
              <div className = "all-article">
                <img src = {Picture} className = "photo" alt =''></img>
                <h4>Head of Article</h4>
                <p> Exercitation voluptate amet magna veniam minim eu ex duis ipsum dolore dolor adipisicing. </p>
              </div>
            </div>
            </div>
            
          </div>
         
    </div>
  );
}

export default Home;
