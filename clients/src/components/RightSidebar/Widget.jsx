import React from "react";
import "./RightSidebar.css";
import pen from "../../assets/pen.svg";
import comment from "../../assets/comment.svg";
import blacklogo from "../../assets/blacklogo.svg";

const Widget = () => {
  return (
    <div className="widget">
      <h4>Stack Overflow blog</h4>
      <div className="right-side-bar-div-1">
        <div className="right-side-bar-div-2">
          <img src={pen} alt="pen" width="18px" />
          <p>
            Observality is key to the future of software (and your DevOps
            career)
          </p>
        </div>
        <div className="right-side-bar-div-2">
          <img src={pen} alt="pen" width="18px" />
          <p>
          Podcast 374:How valuable is your screen name?
          </p>
        </div>
      </div>
      <h4>Featured on Meta</h4>
      <div className="right-side-bar-div-1">
        <div className="right-side-bar-div-2">
          <img src={comment} alt="comment" width="18px" />
          <p>
            Review queue workflows - Final release....
          </p>
        </div>
        <div className="right-side-bar-div-2">
          <img src={comment} alt="comment" width="18px" />
          <p>
          Please welcome valued Associates: #958 - V2Blast #959 - SpencerG
          </p>
        </div>
        <div className="right-side-bar-div-2">
          <img src={blacklogo} alt="blacklogo" width="18px" />
          <p>
             OutDated Answers: accepted answer is now unpinned on Stackover flow 
          </p>
        </div>
      </div>
      <h4>Hot Meta Posts</h4>
      <div className="right-side-bar-div-1">
        <div className="right-side-bar-div-2">
         <p>34</p>
          <p>
              Why was this spam flag declined ,yet the question marked as spam?
          </p>
        </div>
        <div className="right-side-bar-div-2">
        <p>34</p>
          <p>
              What is the best course of action when a user has high enough rep to...
          </p>
        </div>
        <div className="right-side-bar-div-2">
        <p>14</p>
          <p>
             Is a link to the "How to ask " help page a useful comment?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Widget;
