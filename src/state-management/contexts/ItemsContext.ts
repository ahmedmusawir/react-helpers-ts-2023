import React from "react";
import { Dispatch } from "react";
import { Item, ItemAction } from "../reducers/itemsReducer";

interface ItemContextType {
  items: Item[];
  itemsDispatch: Dispatch<ItemAction>;
}

const ItemContext = React.createContext<ItemContextType>({} as ItemContextType);

export default ItemContext;
