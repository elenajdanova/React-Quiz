import React from 'react';


const AnswersDisplay = (props) => {

  const options = () => {
    for (let i=0; i < 4; i+2) {
    
    return (
      <div>
      <div className="ui two buttons hSpace">
        <button className="ui basic green button">{props.answerList[i]}</button>
        <button className="ui basic green button">{props.answerList[i+1]}</button>
      </div>
      <div className="ui two buttons hSpace">
        <button className="ui basic green button">{props.answerList[i+2]}</button>
        <button className="ui basic green button">{props.answerList[i+3]}</button>
      </div>
      </div>
    )
    }
  };

  return(
    <div> {options()} </div>
  );

};



export default AnswersDisplay;
