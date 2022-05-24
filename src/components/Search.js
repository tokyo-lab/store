import { useState, useEffect } from "react";

const Search = () => {
  const [items, setItems] = useState([]);
  // console.log(location);

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    const res = await fetch(`http://localhost:3001/items`);
    const items = await res.json();
    setItems(items);
    console.log(items);
  }

  return (
    <div>
      {items.map((item) => (
        <div className="item" key={item.id}>
          <h1>{item.name}</h1>
          <p>{item.details}</p>
          <p>{item.material}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Search;
