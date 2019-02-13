import React from 'react';


const AnswersDisplay = (props) => {

  const onAnswer = (e) =>{
    let userAnswer = e.target.value;
    if (userAnswer === props.correctAnswer) {
      //call callback from the index component (true)
    } else {
      //call callback from the index component (false)
    }
    //console.log(userAnswer + props.correctAnswer);
  }

  return(
    <div>
    <div className="ui two buttons hSpace">
      <button onClick={onAnswer}
              value={props.answerList[0]}
              className="ui basic green button">{props.answerList[0]}</button>
      <button onClick={onAnswer}
              value={props.answerList[1]}
              className="ui basic green button">{props.answerList[1]}</button>
    </div>
    <div className="ui two buttons hSpace">
      <button onClick={onAnswer}
              value={props.answerList[2]}
              className="ui basic green button">{props.answerList[2]}</button>
      <button onClick={onAnswer}
              value={props.answerList[3]}
              className="ui basic green button">{props.answerList[3]}</button>
    </div>
    </div>
  );

};



export default AnswersDisplay;
