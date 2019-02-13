import React from 'react';
import './QuestionDisplay.css';

const QuestionDisplay = (props) => {

  const renderedQuestion = () => {
    let shuffledQuestions = [];
    if (props.questionList.length !== 0) {
        shuffledQuestions = shuffle(props.questionList);
        //console.log(shuffledQuestions);
        return shuffledQuestions[0].question;
    } else {
      return "Loading...";
    }
  };

  const shuffle = (arr) => {
    function compareRandom(a, b) {
      return Math.random() - 0.5;
    }
    arr.sort(compareRandom);
    return arr;
}

    return(
      <div className="ui segment center aligned">
        <div className="content questionMargins"> {renderedQuestion()} </div>
        <div className="extra content">
           <div className="ui two buttons">
             <button className="ui basic green button">A</button>
             <button className="ui basic green button">B</button>
           </div>
           <div className="hSpace">
             <div className="ui two buttons">
               <button className="ui basic green button">C</button>
               <button className="ui basic green button">D</button>
             </div>
           </div>
        </div>
      </div>
    );

};



export default QuestionDisplay;
