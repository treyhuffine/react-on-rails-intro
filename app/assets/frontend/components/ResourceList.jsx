import OneResource from './OneResource';
import ResourceStore from '../stores/ResourceStore';

export default class ResourceList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resources: []
    };
  }
  componentDidMount() {
    this.setState({
      resources: ResourceStore.fetchAll()
    });
  }
  render() {
    let resources = this.state.resources.map((resource, idx) => {
      return <OneResource resource={resource} key={idx} />
    })
    return (
        <ul className="collection">
          {resources}
        </ul>
    );
  }
}
