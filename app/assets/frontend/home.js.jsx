import Form from './components/Form';
import ArticleList from './components/ArticleList';
import Navbar from './components/Navbar';
import API from './API';

API.getAllResources();

class App extends React.Component {
  render() {
    return (
      <div className="contentWrapper">
        <Navbar />
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
