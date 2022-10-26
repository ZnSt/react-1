import { PureComponent } from "react";

export class Tabs extends PureComponent {
  state = {
    activeTabsIdx: 0,
  };

  setActiveIdx = (idx) => {
    this.setState({ activeTabsIdx: idx });
  };

  //   shouldComponentUpdate(nextProps, nextState) {
  //     return nextState.activeTabsIdx !== this.state.activeTabsIdx;
  //   }

  render() {
    const activeTab = this.props.items[this.state.activeTabsIdx];
    return (
      <>
        <div>
          {this.props.items.map((item, idx) => (
            <button type="button" key={item.label} onClick={() => this.setActiveIdx(idx)}>
              {item.label}
            </button>
          ))}
        </div>
        <div>
          <h2>{activeTab.label}</h2>
          <p>{activeTab.content}</p>
        </div>
      </>
    );
  }
}
