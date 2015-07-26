export default class SearchForm extends React.Component {
  render() {
    return (
      <form>
        <div className="input-field grey lighten-1">
          <input id="search" type="search" required />
          <label htmlFor="search"><i className="material-icons">search</i></label>
          <i className="material-icons">close</i>
        </div>
      </form>
    );
  }
}
