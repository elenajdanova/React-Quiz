import React from 'react';

const AppFeedback = (props) => {

  const answerDisplay = () => {
    if (props.userChoise === null) {
      return;
    }else if (props.userChoise === props.correctAnswer) {
      return <h3>You are right!</h3>
    } else {
      return <h3>Wrong answer!</h3>
    }
  };

  return (
    <div className="ui center aligned header">{answerDisplay()}</div>
  );
};


export default AppFeedback;
