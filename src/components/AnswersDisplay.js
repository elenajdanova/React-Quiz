import React from 'react';


const AnswersDisplay = (props) => {  

  return(
    <div>
    <div className="ui two buttons hSpace">
      <button className="ui basic green button">{props.answerList[0]}</button>
      <button className="ui basic green button">{props.answerList[1]}</button>
    </div>
    <div className="ui two buttons hSpace">
      <button className="ui basic green button">{props.answerList[2]}</button>
      <button className="ui basic green button">{props.answerList[3]}</button>
    </div>
    </div>
  );

};



export default AnswersDisplay;
