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

  const tableOfContentTitles = [
    {
      title: "I am number 1",
      scrollToVal: "#index0"
    },
    {
      title: "Number 2",
      scrollToVal: "#index1"
    }
  ]

  return (
    <div className="article-page">
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

      <div className="article-go-top">
        <i onClick={()=>{window.scrollTo(0,0)}}><IoMdArrowUp/></i>
      </div>

      <div className="page-body">
        <div className="page-grid">
          <div className="left">
            <div className="content">
              <div className="back">
                <Link className="back-text" to="/">Back to Articles</Link>
                <Link className="back-icon" to="/"><IoMdReturnLeft/></Link>
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
                <div className="article-vid-center">
                  {/* React will give an error that tells you to rename some attributes in the iframe */}
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/8xmBjXKAi54" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="article-vid-full article-vid-center">
                  {/* React will give an error that tells you to rename some attributes in the iframe */}
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/8xmBjXKAi54" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
                    {tableOfContentTitles.map((content, index) => {
                      return <li key={index} onClick={()=>{scrollTo(content.scrollToVal)}}>
                        <p title={content.title}>{content.title}</p>
                      </li>
                    })}
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