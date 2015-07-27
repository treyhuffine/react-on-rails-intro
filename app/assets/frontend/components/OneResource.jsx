import ResourceActionsCreator from "../actions/ResourceActionsCreator";

let iconStyle = {
  color: 'rgb(230, 144, 132)',
  'marginLeft': '5px',
  'fontSize': '15px',
  'verticalAlign': 'middle',
  'marginBottom': '2px',
  'cursor': 'pointer'
}

export default class OneResource extends React.Component {
  deleteResource() {
    ResourceActionsCreator.deleteResource(this.props)
  }
  render() {
    return (
          <li className="collection-item">
            <div>
              {this.props.resource.title} | by {this.props.resource.author_name}
              <span onClick={this.deleteResource.bind(this)}><i className="material-icons" style={iconStyle}>delete</i></span>
              <a href={this.props.resource.link} className="secondary-content">
                <i className="material-icons" style={{'color': '#66bb6a'}}>send</i>
              </a>
            </div>
          </li>
    );
  }
}
