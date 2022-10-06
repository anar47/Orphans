import React from 'react'
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import {useState} from "react";
import { useEffect } from "react";
import axios from 'axios';
import $ from 'jquery';
import { Link } from 'react-router-dom'
import ModalDialog from "../components/Modal";

function Quiz() {

  const [data, setData] = useState({})
  const [questionIndex, setQuestionIndex] = useState(0)
  const [question, setQuestion] = useState({})
  const [answers, setAnswers] = useState([])
  const [error, setError] = useState({submit: false, catchmsg: "", errormsg: ""})
  const [totalScore, setScore] = useState(0)
  const [modalShow, setModalShow] = React.useState(true);

  useEffect(() => {
    if (Object.keys(data).length != 0) {
      console.log(data)
      axios.get(`http://localhost:9000/question/${data.readingQuestions[questionIndex]}`).then(res => setQuestion(res.data))
    }
  }, [data, questionIndex])


  useEffect(() => {
    axios.get(`http://localhost:9000/test/${localStorage.getItem('testId')}`).then(res => setData(res.data))

  }, [])

  const handleNext = () => {
    let radios = document.querySelectorAll('input[type="radio"]:checked');
    let value = radios.length> 0? radios[0].id: undefined;
    const ans = answers;
    ans[questionIndex] = value;
    setAnswers(ans);
    console.log(answers)
    if(question.correctOption === value){ setScore(totalScore + 1)}
    setQuestionIndex(questionIndex + 1)
    if(answers[questionIndex + 1] === undefined){
      $('input[type=radio]').prop('checked', false);
    } else {
      $(`input[id=${answers[questionIndex + 1]}]`).prop('checked', true);
    }
  };
  const handleBack = () => {
    setQuestionIndex(questionIndex - 1)
    if(answers[questionIndex - 1] === undefined){
      console.log(answers[questionIndex - 1], questionIndex - 1)
      $('input[type=radio]').prop('checked', false);
    } else {
      console.log(answers[questionIndex - 1], questionIndex - 1)
      $(`input[id=${answers[questionIndex - 1]}]`).prop('checked', true);
    }
  };
  
  const Onsubmit = () => {
    let radios = document.querySelectorAll('input[type="radio"]:checked');
    let value = radios.length> 0? radios[0].id: undefined;
    const ans = answers;
    ans[questionIndex] = value;
    setAnswers(ans);
    let notattempcount = 0;
    answers?.map((ans) => {
      if(ans === undefined){notattempcount++}
    })
    if (notattempcount != 0) {
      setError({
        catchmsg: "Please attempt all question",
        errormsg: "error",
        submit: true
      });
    } else{
      setError({
        catchmsg: "",
        errormsg: "",
        submit: true
      });
      try{
        const resp = axios.post(`http://localhost:9000/user/updateScore/${localStorage.getItem("user")}`, {score: totalScore, answers: answers})
      } catch(err){
        console.log('unable to update user information')
      }
    }
  }


  if(Object.keys(data).length != 0 && Object.keys(question).length != 0){
    return (
            <div>
                <ModalDialog
                    show={modalShow}
                    onHide={() => setModalShow(false)}/>
              <h1 className="font-bold text-center font-large break-normal pt-6 pb-2 text-3xl md:text-4xl">{data.readingTitle}</h1>
              <p className="py-6" dangerouslySetInnerHTML={{ __html: (data.readingBody.replaceAll('<p>', '<p>'))}}>
              </p>
            <div>
              <div>
                <p className="text-center font-medium text-2xl lg:text-3xl leading-loose"
                    dangerouslySetInnerHTML={{ __html: question.question }}/>
                <div className="grid grid-cols-1 my-5 space-y-2 place-content-center"><br/>
                {question.options.map((answer, index) => {
                  return (<>
                    <div key={index} className="Quiz_multiple_options">
                      <label>
                        <input class="radio" key={index} id={index} type="radio" value={answer} name={question.questionNumber} className=""/>
                        {answer}
                      </label>
                    </div>
                    </>);
                })}
                </div>
                <div className="bg-green-700 mt-16">
              <MobileStepper variant="dots" steps={data.readingQuestions.length} position="static" activeStep={questionIndex} nextButton={
                  questionIndex === data.readingQuestions.length - 1 ? (
                    <Button size="small" onClick={Onsubmit}>
                      Submit
                    </Button>
                  ) : (
                    <Button size="medium" onClick={handleNext} disabled={questionIndex === data.readingQuestions.length}>
                      Next
                    </Button>
                  )
                }
                backButton={
                  <Button size="medium" onClick={handleBack} disabled={questionIndex === 0}>
                    Back
                  </Button>
                }
              />
            </div>
              </div>
            </div>
            <div>
            {(error.submit && error.errormsg == "") ? (
              <div className="flex justify-center h-full">
                <div className="  text-center  h-full ">
                  <h2 className="text-3xl text-center py-8 ">
                    {" "}
                    The score is {totalScore} Out Of {data.readingQuestions.length}{" "}
                  </h2>
                  <Link to='../essay'>Proceed to Essay section</Link>
                </div>
              </div>) : (<p>{error.catchmsg}</p>)
          }
          </div>
        </div>
  )
}
}

export default Quiz;