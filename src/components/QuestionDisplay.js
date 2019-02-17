import React from 'react';
import './QuestionDisplay.css';
import ButtonsDisplay from './ButtonsDisplay';


const shuffle = (arr) => {
  function compareRandom(a, b) {
    return Math.random() - 0.5;
  }
  arr.sort(compareRandom);
  return arr;
}

const QuestionDisplay = (props) => {

  const renderQuestion = () => {
  let shuffledQuestions = [];
  if (props.questionList.length !== 0) {
      shuffledQuestions = shuffle(props.questionList);
      //console.log(shuffledQuestions);
      let num = 0;
        let question = shuffledQuestions[num].question;
        let answers = shuffledQuestions[num].incorrect_answers;
        let correctAnswer = shuffledQuestions[num].correct_answer;
        answers.push( correctAnswer );
        answers = shuffle(answers);
        // console.log(answers);
        return (
          <div>
            <div className="content questionMargins"> {question} </div>
            <div className="extra content">
              <ButtonsDisplay
                answerList = {answers}
                correctAnswer = {correctAnswer}
                onUserChoise = {props.onUserChoise}
              />
            </div>
          </div>
        )
      }  else {
        return <div>Loading...</div>;
      }
  }

        return(
          <div className="ui segment center aligned">
            {renderQuestion()}
          </div>
        );

}


export default QuestionDisplay;
