import OneResource from './OneResource'

export default class ResourceList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resources: [
        {title: 'test1', link: ''},
        {title: 'test2..', link: ''},
        {title: 'test3...', link: ''},
        {title: 'test4.......', link: ''}
      ]
    };
  }
  componentDidMount() {
    $.get("/articles")
    .success(data => {
      this.setState({ resources: data });
    })
    .error(error => {
      console.log(error);
    })
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
