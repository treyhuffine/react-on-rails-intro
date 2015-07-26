// var Flux = require('flux');

import Form from './components/Form';

class App extends React.Component {
  render() {
    return (
      <div className="formWrapper">
        <h3>Add an article:</h3>
        <Form />
      </div>
    );
  }
}

$(()=> {
  React.render(
    <App />,
    document.getElementById('root')
  )
});
