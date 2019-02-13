import React from 'react';
import ReactDOM from 'react-dom';
import QuestionDisplay from './components/QuestionDisplay';
import trivia from './apis/trivia';

class App extends React.Component {
  state = { questionBase:[] };

  componentDidMount(){
    (async () => {
      const response = await trivia.get();
      this.setState({questionBase: response.data.results});
      //console.log(response.data.results);
    })();
  }

  render() {
    return (
      <div className="ui container questionDisplay">
        <QuestionDisplay
          questionList = {this.state.questionBase}
        />
      </div>
    );
  }
};


ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
