import { useContext, useReducer, useState } from "react";
import AuthContext from "./contexts/AuthContext";
import ItemsContext from "./contexts/ItemsContext";
import itemsReducer from "./reducers/itemsReducer";

interface Item {
  id: number;
  title: string;
}

const ItemList = () => {
  //   const [items, dispatch] = useReducer(itemsReducer, []);
  const { items, itemsDispatch } = useContext(ItemsContext);
  const { user, dispatch } = useContext(AuthContext);

  return (
    <>
      <h3>
        Item List by <span className="badge">{user}</span>
      </h3>
      <button
        onClick={() =>
          //   setitems([{ id: Date.now(), title: "item " + Date.now() }, ...items])
          itemsDispatch({
            type: "ADD",
            item: { id: Date.now(), title: "ITEM " + Date.now() },
          })
        }
        className="btn btn-primary my-3"
      >
        Add item
      </button>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item.id} className="list-group-item flex justify-between ">
            <span className="flex-grow-1">{item.title}</span>
            <button
              className="btn btn-error"
              //   onClick={() => setitems(items.filter((t) => t.id !== item.id))}
              onClick={() => itemsDispatch({ type: "DELETE", itemId: item.id })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ItemList;
