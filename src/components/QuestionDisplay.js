import React from 'react';
import './QuestionDisplay.css';

const QuestionDisplay = (props) => {
  const renderedQuestion = () => {
    let shuffledQuestions = [];
    if (props.questionList.length !== 0) {
      shuffledQuestions = shuffle(props.questionList);
    }


  };

  const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        if (i !== j) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    return arr;
}

    return(
      renderedQuestion(),
      <div className="ui segment center aligned">
        <div className="content questionMargins">  </div>
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
