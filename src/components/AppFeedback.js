import React from 'react';

const AppFeedback = (props) => {

  const answerDisplay = () => {
    if (props.userChoise === null) {
      return;
    }else if (props.userChoise === props.correctAnswer) {
      return <h2>You are right!</h2>
    } else {
      return <h2>Wrong answer!</h2>
    }
  };

  return (
    <div className="center aligned">{answerDisplay()}</div>
  );
};


export default AppFeedback;
