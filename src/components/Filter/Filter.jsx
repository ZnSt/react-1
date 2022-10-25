import "./Filter.css";
export const Filter = ({ onChange, value }) => {
  return (
    <div className="TodoFilter">
      <label className="TodoFilter__label ">
        Фильтр по имени
        <input type="text" value={value} onChange={onChange} className="TodoFilter__input" />
      </label>
    </div>
  );
};
