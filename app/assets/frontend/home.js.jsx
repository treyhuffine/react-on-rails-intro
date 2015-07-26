// var Flux = require('flux');

import Form from './components/Form';
import ArticleList from './components/ArticleList';
import API from './API';

API.getAllResources();

class App extends React.Component {
  render() {
    return (
      <div className="formWrapper">
        <h3>Add an article:</h3>
        <Form />
        <ArticleList />
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
