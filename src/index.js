import React from 'react';
import ReactDOM from 'react-dom';
import QuestionDisplay from './components/QuestionDisplay';
import trivia from './apis/trivia';
import AppFeedback from './components/AppFeedback';

class App extends React.Component {
  state = {
    questionBase:[],
    userChoise: null,
    correctAnswer : ""
   };

  componentDidMount(){
    (async () => {
      const response = await trivia.get();
      this.setState({questionBase: response.data.results});
      //console.log(response.data.results);
    })();
  };

  onUserChoise = (option, correctAnswer) => {
    this.setState(
      { userChoise: option,
        correctAnswer: correctAnswer
      });
  };

  render() {
    return (
      <div className="ui container questionDisplay">
        <QuestionDisplay
          questionList = {this.state.questionBase}
          onUserChoise = {this.onUserChoise}
        />
        <AppFeedback
          userChoise = {this.state.userChoise}
          correctAnswer = {this.state.correctAnswer}
        />
      </div>
    );
  }
};


ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
