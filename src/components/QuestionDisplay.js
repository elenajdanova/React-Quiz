import React from 'react';
import './QuestionDisplay.css';
import AnswersDisplay from './AnswersDisplay';


const shuffle = (arr) => {
  function compareRandom(a, b) {
    return Math.random() - 0.5;
  }
  arr.sort(compareRandom);
  return arr;
}

const QuestionDisplay = (props) => {
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

        return(
          <div className="ui segment center aligned">
            <div className="content questionMargins"> {question} </div>
            <div className="extra content">
              <AnswersDisplay
                answerList = {answers}
                correctAnswer = {correctAnswer}
              />
            </div>
          </div>
        );

  } else {
    return <div>Loading...</div>;
  }
};



export default QuestionDisplay;
