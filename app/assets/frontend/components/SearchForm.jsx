export default class SearchForm extends React.Component {
  render() {
    return (
      <form>
        <div className="input-field green lighten-3">
          <input id="search" type="search" required />
          <label htmlFor="search"><i className="material-icons" style={{'marginTop': '20px'}}>search</i></label>
        </div>
      </form>
    );
  }
}
