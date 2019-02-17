import React from 'react';

const ButtonsDisplay = (props) => {

  const answerList = props.answerList.map( (option) => {
    return (
      <button
        onClick={ () => props.onUserChoise(option, props.correctAnswer) } //call callback from the index component with the user answer
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

  return(
    <div>
      <div className="ui two buttons hSpace">{renderAnswers()}</div>
      <div className="ui two buttons hSpace">{renderAnswers()}</div>
    </div>
  );
};


export default ButtonsDisplay;
