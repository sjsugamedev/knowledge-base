import React from "react";
import "./css/Articles.css";
import "./css/About.css";

function About() {
  return (
    <div className="article-page">
      <div className="navbar">
        <div className="navbar-header">
          <a className="navbar-title" href="/">
            Knowledge Base
          </a>
        </div>
        <div className="navbar-collapse">
          <ul>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="https://sjsugamedev.com/">GameDev</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="page-body">
        <div className="page-grid">
          <div className="left"></div>

          <div className="center">
            <div className="article">
              <div className="about-article-container">
                <div className="article-header">
                  <h1 className="article-title">About Knowledge Base</h1>
                </div>

                <div className="article-text">
                  <h3 className="about-article-heading">
                    What is Knowledge Base
                  </h3>
                  <p className="p-indent">
                    Knowledge Base is a collection of articles related to game
                    design and development written by students at San Jose State University. The purpose
                    of this site was to provide a space for students to share helpful resources and information to others.
                    For recruiters and industry professionals, Knowledge Base
                    provides insight into the skills of our members and the
                    challenges we are trying to overcome.
                  </p>
                  <h3 className="about-article-heading">The team</h3>
                  <p className="p-indent">
                    Knowledge Base was proposed and designed by Cole Pergerson.
                    He worked with Anthony Sokry and Hao Le to develop the first
                    prototype. This site couldn’t have been made without the
                    support of the president of the club, Edward Chang, the
                    other officers of the club, and our club advisor, James
                    Morgan.
                  </p>
                </div>
              </div>
            </div>
            <div className="article">
              <div className="about-article-container">
                <div className="article-header">
                  <h1 className="article-title">QnA</h1>
                </div>

                <div className="article-text">
                  <h3 className="about-article-heading">
                    Who is this site for?
                  </h3>
                  <p>
                    Knowledge Base is a publicly available resource that was
                    created for the students of San Jose State University.
                  </p>
                  <h3 className="about-article-heading">
                    Can I add my own article?
                  </h3>
                  <p>
                    As of now, there is no automated pipeline to upload an
                    article to the site. To publish your article, submit a pdf
                    of your article to any of the club officers for approvable.
                    The only requirements for an article to be approved are
                    first, it follows our code of conduct, and second, it
                    supports the mission of KB.
                  </p>
                </div>
              </div>
            </div>

            <div className="article">
              <div className="about-article-container">
                <div className="article-header">
                  <h1 className="article-title">How KB started</h1>
                </div>

                <div className="article-text">
                  <p className="p-indent">
                    Knowledge Base started when Cole Pergerson, a student
                    studying Digital Media Art, James Morgan, a DMA professor
                    and advisor of the game dev club, and Tom Austin, an
                    Animation professor, sat together and discussed how to get
                    students of different disciplines to work together
                    efficiently to create a video game. This conversation
                    directly followed the release of Tezca: In The Shadows, a
                    first person horror game made by a team of Animation
                    students and three student programmers. The game took a year
                    to make and during that time, development was pretty rocky
                    due to miscommunications between artists and programmers and
                    a lack of testing. Seeing this, Cole, James, and Tom aimed
                    to come up with a set of strategies to help students work
                    together to create fantastic games. Originally, these ideas
                    were to be documented and dubbed as Best Practices for Game
                    Design and Development. Every failure and success from teams
                    at SJSU would be used to iterate Best Practices into the
                    most effective strategies and tips. Eventually, Best
                    Practices evolved into a more decentralized format known as
                    Knowledge Base, a site where anyone can share their ideas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="right"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
