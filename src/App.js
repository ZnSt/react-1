import { Component } from "react";

export class App extends Component {
  state = {
    page: 1,
    query: "",
    items: [],
  };

  loadMore = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page || prevState.query !== this.state.query) {
      console.log("fetch.data");
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ page: 1, query: event.target.elements.query.value, items: [] });
    event.target.reset();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="query" />
          <button type="submit">Search</button>
        </form>

        <button onClick={this.loadMore}>Load More</button>
      </div>
    );
  }
}
