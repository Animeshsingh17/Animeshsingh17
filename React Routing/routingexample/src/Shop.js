import React, { useEffect, useState } from "react";
function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/store/get"
    );
    const dataItems = await data.json();
    setItems(dataItems.data);
  };

  return (
    <div>
      <h1> shop page </h1>
      <ul>
        {items.map((item) => (
          <li key={item.itemId} className="item">
            <div className="card">
              <img src={item.item.images.icon} alt="Avatar" />
              <div className="container">
                <h4>
                  <b>{item.item.name}</b>
                </h4>
                <h3>
                  <b>{item.item.rarity}</b>
                </h3>
                <h6>
                  <b>{item.item.ratings.avgStars}</b>
                </h6>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Shop;
