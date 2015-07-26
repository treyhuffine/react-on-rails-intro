import OneResource from './OneResource'

export default class ResourceList extends React.Component {
  render() {
    return (
        <ul className="collection">

          <li className="collection-item"><div>Link one<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div></li>
          <li className="collection-item"><div>Link two<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div></li>
          <li className="collection-item"><div>Link Three<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div></li>
          <li className="collection-item"><div>Link 4<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div></li>
        </ul>
    );
  }
}
