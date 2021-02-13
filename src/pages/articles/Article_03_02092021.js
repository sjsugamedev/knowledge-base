import React from 'react';
import "../css/Articles.css";
import { IoMdReturnLeft, IoMdArrowUp } from "react-icons/io";
import HeroImg2 from "./img/article_02/img_article02_cover_2.png";
import pdf from './download/GGJ 2021.pdf';
import { Link } from 'react-router-dom';

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
          <Link className="navbar-title" to="/">
            Knowledge Base
          </Link>
        </div>
        <div className="navbar-collapse">
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <a href="https://sjsugamedev.com/">GameDev</a>
            </li>
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
                <a className="back-text" href="/">
                  Back to Articles
                </a>
                <a className="back-icon" href="/">
                  <IoMdReturnLeft />
                </a>
              </div>
            </div>
          </div>

          <div className="center">
            <div className="article">
              <div className="hero-img">
                <img src={HeroImg2}></img>
              </div>
              <div className="article-container">
                <div className="article-header">
                  <h1 className="article-title" id="tc-title">
                    Making Friends in 48 hours
                  </h1>
                  <div className="author-n-date">
                    <h3>Cole Pergerson</h3>
                    <h3>Date 02/09/2021</h3>
                  </div>
                </div>

                <div className="article-text" id="tc-introduction">
                  <p className="p-indent">
                    Is it possible to make friends that fast? Well maybe not friends, but when you
                    have to work with others to create a game in less that 48 hours, then you might
                    meet some awesome people! On January 29th through January 31st, the CADRE
                    Media Labs worked with the Game Dev Club to host Global Game Jam 2021 at SJSU.
                    If you don’t know, Global Game Jam is the largest game making event in the world!
                    In the year we hosted, 2021, over 28,000 people registered with 585 game jam sites
                    with a total of 104 countries participating
                  </p>
        
                </div>

                <div className="article-text">
                  <h2 className="article-heading" id="tc-games">Games</h2>
                  <p>
                    Here are games that were showcased at the of the jam (note: these are all the games submitted to our site, go here to see the full list: <a href="https://globalgamejam.org/2021/jam-sites/san-jos%C3%A9-state-university" target="_blank"> https://globalgamejam.org/2021/jam-sites/san-jos%C3%A9-state-university)</a>                   
                  </p>
                </div>

                <div className="article-text">
                  <h3 className="article-heading"> Aqua Hero:</h3>
                  <p>You play a raindrop that has fallen to the ground and must travel through a
                  landscape of fire and death to reach the top of a tree.
                  </p>
                  <break></break>
                  <h3 className="article-heading"> Bark and Found:</h3>
                  <p>You’re a lost dog who must talk to the local humans to find your owner. Of course
                  this is a game so in order to get information, you have to do them a favor!
                  </p>
                  <h3 className="article-heading"> Grand Violent Fantasy:</h3>
                  <p>Four princesses have been kidnapped, and the king has asked you to embark on a
                  treacherous journey to rescue them
                  </p>
                  <break></break>
                  <h3 className="article-heading"> Little Echo:</h3>
                  <p>The cave is dark and you can’t see a thing, but you're a bat so it’s ok! As a bat, you
                  use echolocation to navigate a pitch black cave while avoiding dangerous spikes.
                  </p>
                  <break></break>
                  <h3 className="article-heading"> Little j in little room:</h3>
                  <p>You play a raindrop that has fallen to the ground and must travel through a
                  landscape of fire and death to reach the top of a tree.In this cute point and click game, you try to find your cat who is hiding behind
                  objects scattered around the room.
                  </p>
                  <break></break>
                  <h3 className="article-heading"> No one is home:</h3>
                  <p>This is a two player game where one person is in a haunted environment looking
                  for signs to escape while another player has the full code. The player with the code
                  must help their lost friend escape the dark abyss.
                  </p>
                  
         
                </div>

                <div className="article-text">
                  <h2 className="article-heading" id="tc-friends">Did we make friends?</h2>
                  
                  <p>
                  I asked some of the game jam participants about their experience making a
                  game in 48 hours. With sleep, eating, jobs, and other responsibilities, you never
                  really get the full 48 hours to work. Furthermore, you must balance interesting
                  ideas with a manageable scope. Creating a game under these circumstances is
                  intense, so I was a little worried when I reached out to others for their experience
                  (this article would be such a downer if everyone had a horrible time).
                  </p>
                   
                  <p>
                  Lucky people had a great time participating in Global Game Jam, and
                  although there were many hardships, creating a game was a valuable learning
                  experience. I asked what was the most difficult part of making a game in under 48hours and a common thread was trying to not be too ambitious. Having a large
                  scope can lead to crunch and failing to finish your game in time. Rafael Perez, who
                  worked on ​Aqua Hero​, added that synchronizing tasks between team members was
                  difficult. He says that “our different skills fit perfectly to make a game, but the
                  toughest part was to make them work together by using tools like github, and since
                  you have to choose between working or managing at times that made it harder.”
                  </p>

                  <p>
                  One of the unique opportunities that our game jam provided was the chance
                  to work with different disciplines. Every team that was formed had at least one
                  programmer, artists, and sound designer/musician. When I asked what it was like to
                  work with others who had different specializations, the response was
                  overwhelmingly positive. Christian Acosta was part of the team that made ​Bark and
                  Found​ and said that working with other talents was “a great learning experience.
                  Not only do you learn their perspective on creating the game, but often you learn a
                  little about their specialty.”
                  </p>

                  <p>
                  Even though this game jam has ended, the jammers' relationships with each
                  other have not! Creating new connections with others opens up future
                  opportunities for collaboration. I asked Amy Devorkin, a team member for ​Little
                  Echo​, if she would work with her team again and she said “I would gladly work with
                  any of them again. I feel like we had good vibes and let me work the way I like to
                  while still keeping me on track to finishing.” The best games aren’t made alone, so if
                  you’re looking to form a team around an awesome pitch, then you should know
                  people of different talents who would be willing to collaborate.
                  </p>

                  <p>
                  Finally, when asked if she made a friend, she responded saying, “I wouldn’t
                  say that I made a new friend, but that’s only because the distance and discord lag
                  makes my social anxieties more pronounced. I certainly hope I can work again and
                  possibly become friends.”
                  </p>

                </div>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="content">
              <div className="print-menu">
                <a className="print-link" href={pdf} target="_blank" rel="noreferrer">
                  Download Article
                </a>
                <hr className="line"></hr>
                <a className="article-types" href="/">
                  tutorials
                </a>
                <p className="article-tags"> Tags: #tag #tag #tag #tag #tag</p>
                <div className="table-of-content">
                  <p>Table of Content:</p>
                  <ul>
                    <li onClick={()=>{scrollTo("#tc-title")}}><p>Title</p></li>
                    <li onClick={()=>{scrollTo("#tc-introduction")}}><p>Introduction</p></li>
                    <li onClick={()=>{scrollTo("#tc-games")}}><p>Feature Games</p></li>
                    <li onClick={()=>{scrollTo("#tc-friends")}}><p>Making Friends</p></li>
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
