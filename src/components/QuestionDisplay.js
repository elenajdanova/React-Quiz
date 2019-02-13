import React from 'react';
import './QuestionDisplay.css';


const shuffle = (arr) => {
  function compareRandom(a, b) {
    return Math.random() - 0.5;
  }
  arr.sort(compareRandom);
  return arr;
}

const QuestionDisplay = (props) => {
  let shuffledQuestions = [];
  if (props.questionList.length !== 0) {
      shuffledQuestions = shuffle(props.questionList);
      //console.log(shuffledQuestions);
      let num = 0;
        let question = shuffledQuestions[num].question;
        // let answers = shuffledQuestions[num].incorrect_answers;
        // answers.push( shuffledQuestions[num].correct_answer );
        // console.log(answers);

        return(
          <div className="ui segment center aligned">
            <div className="content questionMargins"> {question} </div>
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

  } else {
    return <div>Loading...</div>;
  }
};



export default QuestionDisplay;
