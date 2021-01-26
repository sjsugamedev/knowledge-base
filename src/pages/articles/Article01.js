import React from 'react';
import '../css/Articles.css';
import { IoMdReturnLeft, IoMdArrowUp } from 'react-icons/io';
import HeroImg from './img/compass.png';
import pdf from './download/Using git without the command line.pdf';
import { Link } from 'react-router-dom';

// Important!
// The links on the Table of Contents will focus the screen to specific parts of the Artcile
// For the links to work, add an id to a specific tag/element in the article (ie <div id="IdNameHere"></div>)
// Then add "#" with the name of that id to the onClick event of the Table of Contents li tags (ie <li onClick={()=>{scrollTo("#index0")}}>A</li>)
//

function Article() {
  function scrollTo(str) {
    // console.log(str);
    if(document.querySelector(str)){
      document.querySelector(str).scrollIntoView();
    }
  }

  return (
    <div className="article-page">
      <div className="navbar">
        <div className="navbar-header">
          <Link className="navbar-title" href="/">Knowledge Base</Link>
        </div>
        <div className="navbar-collapse">
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><a href="https://sjsugamedev.com/">GameDev</a></li>
          </ul>
        </div>
      </div>

      <div className="article-go-top">
        <i onClick={()=>{window.scrollTo(0,0)}}><IoMdArrowUp/></i>
      </div>

      <div className="page-body">
        <div className="page-grid">
          <div className="left">
            <div className="content">
              <div className="back">
                <a className="back-text" href="/">Back to Articles</a>
                <a className="back-icon" href="/"><IoMdReturnLeft/></a>
              </div>
            </div>
          </div>

          <div className="center">
            <div className="article">
              <div className="hero-img">
                <img src={HeroImg}></img>
              </div>
              <div className="article-container">
                <div className="article-header">
                  <h1 className="article-title" id="index0">Title of Article</h1>
                  <div className="author-n-date">
                    <h3>By Author</h3>
                    <h3>Date 00/00/0000</h3>
                  </div>
                </div>

                <div className="article-text">
                  <p className="p-indent">
                    ipsumLoremipsumdolorsitamet,consecteturadipisicingelit,seddoeiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <p>
                    ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>

                <div className="article-text">
                  <h1 className="article-heading" id="index1">Heading</h1>
                  <p className="p-indent">
                    ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <p>
                    ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>

                <div className="article-img">
                  <img className="img-full" src={HeroImg}></img>
                </div>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="content">
              <div className="print-menu">
                <a className="print-link" href={pdf} target="_blank" rel="noreferrer">Download Article</a>
                <hr className="line"></hr>
                <a className="article-types" href="/">tutorials</a>
                <p className="article-tags"> Tags: #tag #tag #tag #tag #tag</p>
                <div className="table-of-content">
                  <p>Table of Content:</p>
                  <ul>
                    <li onClick={()=>{scrollTo("#index0")}}><p>Index 1</p></li>
                    <li onClick={()=>{scrollTo("#index1")}}>A</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;