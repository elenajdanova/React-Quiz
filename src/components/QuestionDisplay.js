import React from 'react';
import './QuestionDisplay.css';

const QuestionDisplay = (props) => {

    return (
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
