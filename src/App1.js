import { useEffect, useState } from "react";

export const App1 = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setPage(1);
    setQuery(event.target.elements.query.value);
    setItems([]);
    event.target.reset();
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    console.log(page);
    console.log(query);
    console.log("fecth data");
  }, [page, query]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>

      <button onClick={loadMore}>Load More</button>
    </div>
  );
};
