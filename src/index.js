import React from 'react';
import ReactDOM from 'react-dom';
import QuestionDisplay from './components/QuestionDisplay';
import trivia from './apis/trivia';

class App extends React.Component {
  state = {
    questionBase:[],
    userChoise: null
   };

  componentDidMount(){
    (async () => {
      const response = await trivia.get();
      this.setState({questionBase: response.data.results});
      //console.log(response.data.results);
    })();
  };

  onUserChoise = (option) => {
    this.setState({ userChoise: option});
  };

  render() {
    return (
      <div className="ui container questionDisplay">
        <QuestionDisplay
          questionList = {this.state.questionBase}
          onUserChoise = {this.onUserChoise}
        />
      </div>
    );
  }
};


ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
