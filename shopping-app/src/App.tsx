import React, { useState } from "react";
import ShoppingList from "./components/ShoppingList";
import "./App.css";
import Item from "./models/item";
import ShoppingListForm from "./components/ShoppingListForm";

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const addItem = (product: string) => {
    console.log("MADE TO THE APP COMPONENT!");
    console.log(product);
  };
  // const items = [
  //   { id: 1, product: "Lemon", quantity: 3 },
  //   { id: 2, product: "Chicken Breast", quantity: 3 },
  //   { id: 3, product: "Tomato", quantity: 3 },
  // ];
  return (
    <div className="App">
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={addItem} />
    </div>
  );
}

export default App;
