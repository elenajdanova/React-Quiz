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

const QuestionDisplay = ({questionList, onUserChoise}) => {

  const renderQuestion = () => {
    let num = 0;

    if (questionList.length !== 0) {
      let question = questionList[num].question;
      let answers = questionList[num].incorrect_answers;
      let correctAnswer = questionList[num].correct_answer;
      answers.push( correctAnswer );
      answers = shuffle(answers);
      questionList.shift();
      return (
        <div>
          <div className="content questionMargins"> {question} </div>
          <div className="extra content">
          <ButtonsDisplay
            answerList = {answers}
            correctAnswer = {correctAnswer}
            onUserChoise = {onUserChoise}
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
