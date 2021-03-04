import React from 'react';
import "../css/Articles.css";
import { IoMdReturnLeft, IoMdArrowUp } from "react-icons/io";
import HeroImg2 from "./img/article_04/img_article04_cover.png";
import Img_Article04_1 from "./img/article_04/img_article04_1.png";
import pdf from './download/Interview with Michael Tucker.pdf';
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
              <Link className="back-text" to="/">
                  Back to Articles
                </Link>
                <Link className="back-icon" to="/">
                  <IoMdReturnLeft />
                </Link>
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
                  Interview with Double Fine Producer
                  </h1>
                  <div className="author-n-date">
                    <h3>Cole Pergerson</h3>
                    <h3>Date 03/04/2021</h3>
                  </div>
                </div>

                <div className="article-text" id="tc-introduction">
                  <p className="p-indent">
                    This is a paraphrased version of a longer video interview with Michael Tucker, a producer at
                    Double Fine. Based in San Francisco, CA, Double Fine Productions is a game development
                    studio that is best known for making Psychonauts, a classic action/adventure platformer. The
                    original interview with Michael was held in June 2020 to help James, Tom, and Cole teach
                    SJSU students about project management in game development.
                  </p>
                  <div className="article-img">
                    <img className="img-full" src={Img_Article04_1}></img>
                    <p className="img-sub-text">Here is a link to the full video interview: <a href="https://www.youtube.com/watch?v=cGjyi71H6NY&ab_channel=dma" target="_blank">https://www.youtube.com/watch?v=cGjyi71H6NY&ab_channel=dma</a></p>
                  </div>
        
                </div>

                <div className="article-text" id="tc-interview">
                  <h2 className="article-heading" >Interview with Michael Tucker</h2>
                </div>

                <div className="article-text">
                  <p>
                    Cole: Should we do introductions??
                  </p>

                  <p>
                    James: Yea, that would be a good idea!
                  </p>

                  <p>
                    Tom Austin: I’m Tom Austin, I teach modeling and I'm the BFA modeling advisor for most years.
                  </p>

                  <p>
                    James Morgan: I'm James Morgan I teach in the digital media arts program. I'm also the advisor for the
                    game development Club and I teach a class in game studies.
                  </p>

                  <p>
                    Cole Pergerson: I'm Cole Pergerson, I'm a student at SJSU and my major is Digital Media Art
                    and I've been making games for about three years and trying to learn more.
                  </p>

                  <p> 
                    Michael Tucker: I'm Michael Tucker I'm a producer at Double Fine productions and San Jose
                    State Alumni of the animation illustration program.
                  </p>

                  <p>
                    Tom: I’m an advisor for Animation BFA projects and there is a recurring problem where artists
                    can’t understand or work with programmers and vice versa. How do you get different disciplines
                    to work together effectively? Are there any tools that you recommend for managing teams?
                  </p>

                  <p>
                    Michael: At Double Fine, we use a product management tool called JIRA, which is an obtuse
                    and standard tool in the industry. For a smaller team, I recommend using Trello because JIRA is
                    best for large teams. Using Trello is much more simpler, it’s like digital sticky notes that you
                    would place on a SCRUM board. For those who don’t know, SCRUM is a software development
                    process that would be valuable for any student to understand when working with others. It’s a
                    way to get different groups to work together, quickly review their work, and make next-step
                    decisions that are appropriate at that time. With Trello, you can create a list of to-dos that you
                    and your team agree to do over a course of time which is what we call a sprint.
                  </p>

                  <p>
                    James: What does a SCRUM sprint look like for programmers and artists?
                  </p>

                  <p>
                    Michael: Typically every team has their own goals and are working together to meet deadlines.
                    To get to that point can be very difficult during the beginning stages of production. For instance,
                    you can’t test much until the programmers build the features and you still have no idea if those
                    features will be fun when they’re made. At the same time, you have artists working on assets
                    and those need to be put into the game and tested. If there is a problem, there never is a clear
                    solution which leads to teams butting heads. Once all the core features are created, then at that
                    point, you’re just playing the game and choosing things to improve. Managing that process is
                    much easier. I often read dev logs or post mortems to see how other studios handle problems.
                    Gamasutra.com is a great resource and I recently read a blog from a playstation studio
                    developing Astro Bot. They explained how they design one of their boss battles which involved
                    lots of iteration. First the designers and artists would sketch out an idea and then the
                    programmers would take that and make a playable prototype. Once the sprint ended, they
                    would review the prototype and decide what they would do next. They continued that iterative
                    cycle until they were happy with the boss battle. That’s how, ideally, different disciplines would
                    work together in a sprint.
                  </p>

                  <p>
                    James: When you're talking about the end of a sprint, what's the evaluation process?
                  </p>

                  <p>
                    Michael: So the sprint is kind of like a smaller breakdown of a larger goal called milestones. We
                    layout milestones months apart with keystone goals. It’s not common that these milestones
                    change since it’s unknown how long features will take to finish at the beginning of production.
                    So if we were making a 3D platformer, the first milestone might be just getting a playable character
                    walking and jumping around an empty environment with animations. Once we layout the
                    milestones, we split the time between milestones into manageable steps called sprints. When a
                    team finishes a sprint, their team leader will tell them whether what they made will or not work. If
                    there is a problem, then that means future sprints need to be readjusted but that’s ok.
                  </p>

                  <p> 
                    Tom: Let’s say you need a character for your 3D platformer, well the artists need to make
                    everything and a character model could take months to create. So for a sprint, maybe the artists
                    could give the programmers a prebuilt player model with animations that they can test. That
                    could be fine right? They can just replace it later.
                  </p>

                  <p>
                    Michael: Yea definitely! So if a sprint goal is to get the player model working in game, then you
                    would break down all the tasks that need to be done in order to do that. You might use a generic
                    player model and not the actual finished model. The goal is to see something 3D moving in a
                    level using controller input. Sprint two could be getting animations playing on the model. In the
                    meantime, the artists could have been working on the player model, so by sprint three, the team
                    can try to transfer the finished model into the game. This process can get complicated pretty
                    quickly because of issues that I ran into in school and still run into work. When different
                    disciplines start relying on each other, then you have to shift pieces around if someone ends up
                    taking longer than expected because of other issues. People quickly become blocked. Like if an
                    artist needs to model a character but the concept team hasn’t decided what the character will
                    look like, then the character modeler is just sitting there, doing nothing. The first half of the
                    project is constantly dealing with that, but getting time estimates from everyone is incredibly
                    helpful.
                  </p>

                  <p>
                    Tom: One thing that I found useful for managing was getting those time estimates from team
                    members. I would ask how long would it take to do A, B, C, and D. So as they break down each
                    task, they start to see all the complexities and may realize that a particular task will take longer
                    than expected. Typically, If that team member has done the task before, then I would trust their
                    estimate, if not, then I would double the estimate.
                  </p>

                  <p>
                    Michael: Yea, we tend to pick like 30% to 50% of padding on all our estimates. You know 50
                    seems like a lot but oftentimes that has been almost exactly accurate. It does take a certain
                    amount of trust from them because you’re basically asking them how good they are at their job.
                    You need to be clear that you aren’t trying to be judgemental, you’re just trying to put the task
                    on schedule. A task is going to take as long as it takes so there is no pretending. People start to
                    appreciate what you do because you’re trying to make sure everyone is moving as smoothly as
                    possible and no one is blocked.
                  </p>

                  <p>
                    Cole: Is there anything that other people take for granted for what a producer does or maybe
                    doesn't appreciate what a producer does?
                  </p>

                  <p>
                    Michael: I’m not super knowledgeable in a particular subject and I have to sit down with people
                    and have them explain what they need to do so I can write something in JIRA with a clear
                    description. That gets people to think about any possible hiccups early that they didn’t think at
                    first. Running meetings is another important thing that a producer will do because it’s easy for
                    team members to go off in tangents. A meeting can go on for hours with addressing the core
                    problem that brought the meeting together originally. So making sure people are focused on the
                    right thing saves time. One thing I didn’t like at first but is now something I find really important is note taking.
                    While the meeting is going on, I will be writing down what has been said, what has
                    been agreed on, what are the problems, etc. We often forget what we said so having notes to
                    look at for a reference is super helpful for a team. Using Google doc allows team members to go
                    back after the meeting and leave questions.
                  </p>

                  <p>To listen to the full interview, click on this link: <a href="https://www.youtube.com/watch?v=cGjyi71H6NY&ab_channel=dma" target="_blank">https://www.youtube.com/watch?v=cGjyi71H6NY&ab_channel=dma</a></p>

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
                    <li onClick={()=>{scrollTo("#tc-interview")}}><p>Interview</p></li>
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
