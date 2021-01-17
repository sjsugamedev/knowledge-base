import '../css/Articles.css';
import { IoMdReturnLeft } from 'react-icons/io';
import HeroImg from './img/compass.png';
import pdf from './download/Using git without the command line.pdf';

// Important!
// The links on the Table of Contents will focus the screen to specific parts of the Artcile
// For the links to work, add an id to a specific tag/element in the article (ie <div id="IdNameHere"></div>)
// Be mindful of what id name you use, because it will be displayed on the url once the table of content links are clicked
// Then add "#" with the name of that id to the href="" of the Table of Contents "a" tags (ie <a href="#IdNameHere"></a>)
//

function Article() {
  return (
    <div className="article-page">
      <div className="navbar">
        <div className="navbar-header">
          <a className="navbar-title" href="/">Knowledge Base</a>
        </div>
        <div className="navbar-collapse">
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/">GameDev</a></li>
          </ul>
        </div>
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
                <a className="print-link" href={pdf} target="_blank">Download Article</a>
                <hr className="line"></hr>
                <a className="article-types" href="/">tutorials</a>
                <p className="article-tags"> Tags: #tag #tag #tag #tag #tag</p>
                <div className="table-of-content">
                  <p>Table of Content:</p>
                  <ul>
                    <li><a href="#index0">A</a></li>
                    <li><a href="#index1">A</a></li>
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