class Test extends React.Component {
  render() {
    return (
      <h2>Hello React</h2>
    );
  }
}

$(()=> {
  React.render(
    <Test />,
    $("#root")[0]
  )
});
