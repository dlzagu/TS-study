import React from "react";

function ShoppingListForm(): JSX.Element {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("SUBMITTED!!");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Product Name" />
      <button type="submit">Add item</button>
    </form>
  );
}

export default ShoppingListForm;
