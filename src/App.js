import { Component } from "react";

export class App extends Component {
  state = {
    page: 1,
    query: "",
    items: [],
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      page: 1,
      query: event.target.elements.query.value,
      items: [],
    });
    event.target.reset();
  };

  loadrMore = () => {
    this.setState({
      page: this.state.page + 1,
    });
  };

  componentDidUpdate(_, prevState) {
    if (prevState.page !== this.state.page || this.state.query !== prevState.query) {
      console.log("fetch data");
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="query" />
          <button type="submit">Search</button>
        </form>

        <button onClick={this.loadrMore}>Load More</button>
      </div>
    );
  }
}
