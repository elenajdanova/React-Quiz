import React from 'react';

const AnswersDisplay = (props) => {

  const answerList = props.answerList.map( (option) => {
    return (
      <button
        onClick={onAnswer}
        value={option}
        className="ui basic green button">{option}
      </button>
    )
  });

  let flag = false;
  const renderAnswers = () => {
      if (flag === false) {
        flag = true;
        return answerList.slice(0,2)
      } else {
        return answerList.slice(2,4)
      }
  }

  function onAnswer (e) {
    let userAnswer = e.target.value;
    if (userAnswer === props.correctAnswer) {
    //call callback from the index component (true)
    } else {
    //call callback from the index component (false)
    }
    //console.log(userAnswer);
  }

  return(
    <div>
      <div className="ui two buttons hSpace">{renderAnswers()}</div>
      <div className="ui two buttons hSpace">{renderAnswers()}</div>
    </div>
  );
};


export default AnswersDisplay;
