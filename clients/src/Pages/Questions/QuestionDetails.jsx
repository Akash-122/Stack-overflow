import React from "react";
import { useState } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import moment from 'moment'
import copy from 'copy-to-clipboard'

import upvote from "../../assets/upvote.svg";
import downvotes from "../../assets/downvotes.svg";
import "./Questions.css";
import Avatar from "../../components/Avatar/Avatar";
import DisplayAnswers from "./DisplayAnswers";
import {postAnswer,deleteQuestion,voteQuestion} from '../../actions/question'


const QuestionDetails = () => {
  const { id } = useParams();
  const questionList = useSelector(state => state.questionsReducer)
  // console.log(questionList)

  const dispatch = useDispatch('')
  const Navigate = useNavigate('')
  const location = useLocation('')
  // console.log(location)
  const url = "http://localhost:5173";

  const [Answer , setAnswer] = useState('') 
  const User = useSelector((state) => (state.currentUserReducer))
  
  const handlePostAns = (e , answerLength)=>{
    e.preventDefault()
    if(User === null)
    {
      alert("Login or Signup to answer a question")
      Navigate('/Auth')
    }
    else{
      if(Answer === '')
      {
        alert('Enter an answer before submitting')
      }
      else
      {
        dispatch(postAnswer({id , noOfAnswers: answerLength +1,answerBody: Answer,userAnswered: User.result.name}))
        setAnswer("");
      }
    }
  };


  const handleShare = () => {
    copy(url + location.pathname);
    alert("Copied url : " + url + location.pathname);
  };

  const handleDelete = () => {
    dispatch(deleteQuestion(id, Navigate));
  };

  const handleUpVote = () => {
    if (User === null) {
      alert("Login or Signup to up vote a question");
      Navigate("/Auth");
    } else {
      dispatch(voteQuestion(id, "upVote"));
    }
  };

  const handleDownVote = () => {
    if (User === null) {
      alert("Login or Signup to down vote a question");
      Navigate("/Auth");
    } else {
      dispatch(voteQuestion(id, "downVote"));
    }
  };


  return (
    <div className="question-details-page">
      {questionList.data === null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {questionList.data
            .filter((question) => question._id == id)
            .map((question) => (
              <div className='test' key={question._id}>
                <section className="question-details-container">
                  <h1>{question.questionTitle}</h1>
                  <div className="question-details-container-2">
                    <div className="question-votes">
                      <img src={upvote} alt="upvote" width="18px" className="votes-icon" onClick={handleUpVote}/>
                      <p>{question.upVote.length - question.downVote.length}</p>
                      <img src={downvotes} alt="downvotes" width="18px"className="votes-icon" onClick={handleDownVote}/>
                    </div>
                    <div style={{ width: "100%" }}>
                      <p className="question-body">{question.questionBody}</p>
                      <div className="question-details-tags">
                        {question.questionTags.map((tag) => (
                          <p key={tag}>{tag}</p>
                        ))}
                      </div>
                      <div className="question-actions-user">
                        <div>
                          <button type="button" onClick={handleShare}>
                            Share
                          </button>
                          {
                          User?.result?._id === question?.userId && (
                            <button type="button" onClick={handleDelete}>
                              Delete
                            </button>
                          )}
                        </div>
                        <div>
                          <p>asked {moment(question.askedOn).fromNow()}</p>
                          <Link
                            to={`/Users/${question.userId}`}
                            className="user-link"
                            style={{ color: "#0086d8" }}
                          >
                            <Avatar backgroundColor="orange" px="8px" py="5px">
                              {question.userPosted
                                .charAt(0)
                                .toLocaleUpperCase()}
                            </Avatar>
                            <div>{question.userPosted}</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {
                question.noOfAnswers !== 0 &&
                 (
                  <section>
                    <h3>{question.noOfAnswers} Answers</h3>
                    <DisplayAnswers key={question._id} question={question} handleShare={handleShare}/>
                  </section>
                )
                }
                <section className="post-ans-container">
                  <h3>Your Answer</h3>
                  <form onSubmit={(e) =>{handlePostAns(e, question.answer.length)}}>
                    <textarea name="" id="" cols="30" rows="10" onChange={e=> setAnswer(e.target.value)}></textarea>
                    <br />
                    <input
                      type="submit"
                      className="post-ans-btn"
                      value="Post Your Answer"
                    />
                  </form>
                <p>
                  Browse other Question tagged
                  {
                    question.questionTags.map((tag) =>(
                      <Link to='/Tags' key={tag} className="ans-tags">{tag}</Link>
                    ))
                  }
                  <Link to='/AskQuestion' style={{textDecoration: "none",color: "#009dff"}}> <br /> or Ask your own question</Link>
                </p>
                </section>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default QuestionDetails;
