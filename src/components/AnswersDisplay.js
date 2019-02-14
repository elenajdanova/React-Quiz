import React from 'react';


const AnswersDisplay = (props) => {
  const answerOptions = props.answerList.map( (option) => {
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
    let list = answerOptions;
      if (flag === false) {
        flag = true;
        return list.slice(0,2)
      } else {
        return list.slice(2,4)
      }

  };

  const onAnswer = (e) =>{
    let userAnswer = e.target.value;
    // if (userAnswer === props.correctAnswer) {
    //   //call callback from the index component (true)
    // } else {
    //   //call callback from the index component (false)
    // }
    console.log(userAnswer + props.correctAnswer);
  }

  return(
    <div>
      <div className="ui two buttons hSpace">{renderAnswers()}</div>
      <div className="ui two buttons hSpace">{renderAnswers()}</div>
    </div>
  );

};



export default AnswersDisplay;
