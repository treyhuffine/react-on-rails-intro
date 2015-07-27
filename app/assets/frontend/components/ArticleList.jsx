import SearchForm from './SearchForm';
import ResourceList from './ResourceList';

export default class ArticleList extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="card-panel hoverable">

            <nav>
              <SearchForm />
            </nav>
            <ResourceList />

          </div>
        </div>
      </div>
    );
  }
}
