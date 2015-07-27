// var Flux = require('flux');

import Form from './components/Form';
import ArticleList from './components/ArticleList';
import API from './API';

API.getAllResources();

class App extends React.Component {
  render() {
    return (
      <div className="contentWrapper">
        <nav>
          <div className="nav-wrapper green lighten-1">
            <span className="brand-logo center">Store 'n' Learn <span className="material-icons center" style={{'verticalAlign': 'middle'}}>assessment</span></span>
          </div>
        </nav>
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
