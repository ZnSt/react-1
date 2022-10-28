import { Component } from "react";
import { Modal } from "../Modal";

export class Material extends Component {
  state = {
    isModalOpen: false,
  };
  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { item, onUpdate, onDelete } = this.props;
    const { isModalOpen } = this.state;
    return (
      <div>
        <p>
          <b>Название</b>: {item.title}
        </p>
        <br />
        <p>
          <b>Ссылка</b>: {item.link}
        </p>
        <button type="button" onClick={() => onDelete(item.id)}>
          Удалить
        </button>
        <button type="button" onClick={this.openModal}>
          Редактировать
        </button>
        {isModalOpen && (
          <Modal
            onClose={this.closeModal}
            onEdit={() => onUpdate({ id: item.id, title: Date.now() })}
          />
        )}
      </div>
    );
  }
}

// onClick={() => onUpdate({ id: item.id, title: Date.now() })}
