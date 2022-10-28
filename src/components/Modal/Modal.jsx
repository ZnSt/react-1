export const Modal = ({ onClose, onEdit }) => {
  return (
    <div>
      <h2>Модальное окно для редактирования</h2>
      <button
        type="button"
        onClick={() => {
          onEdit();
          onClose();
        }}
      >
        Редактировать
      </button>
      <button type="button" onClick={onClose}>
        Закрыть
      </button>
    </div>
  );
};
