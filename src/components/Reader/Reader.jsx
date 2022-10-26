import { Component } from "react";
import { Controls } from "../Controls";
import { CurrentPage } from "../CurrentPage";
import { Publications } from "../Publications";

const LS_KEY = "reader_item_index";

export class Reader extends Component {
  state = {
    index: 0,
  };

  changeIndex = (value) => {
    this.setState((prevState) => ({
      index: prevState.index + value,
    }));
  };

  componentDidMount() {
    const savedIndex = Number(localStorage.getItem(LS_KEY));

    if (savedIndex) {
      this.setState({ index: savedIndex });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.index !== this.state.index) {
      localStorage.setItem(LS_KEY, this.state.index);
    }
  }

  render() {
    const { index } = this.state;
    const { items } = this.props;
    const currentItem = items[index];

    return (
      <div>
        <Controls onChange={this.changeIndex} current={index + 1} total={items} />
        <CurrentPage current={index} total={items} />
        <Publications currentItem={currentItem} />
      </div>
    );
  }
}
