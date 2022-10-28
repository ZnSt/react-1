import { Material } from "../Material";
export const MaterialList = ({ items, onDelete, onUpdate }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <Material item={item} onDelete={onDelete} onUpdate={onUpdate} />
        </li>
      ))}
    </ul>
  );
};
