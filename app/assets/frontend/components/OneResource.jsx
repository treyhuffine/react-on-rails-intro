export default class OneResource extends React.Component {
  render() {
    return (
          <li className="collection-item">
            <div>
              {this.props.resource.title}
              <a href="#!" className="secondary-content">
                <i className="material-icons">send</i>
              </a>
            </div>
          </li>
    );
  }
}
