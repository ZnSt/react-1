export const Filter = ({ onChange, value }) => {
  return (
    <label>
      Фильтр по имени
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};
