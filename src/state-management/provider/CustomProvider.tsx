import { ReactNode, useReducer } from "react";
import ItemContext from "../contexts/ItemsContext";
import itemsReducer from "../reducers/itemsReducer";

interface Props {
  children: ReactNode;
}

const CustomProvider = ({ children }: Props) => {
  const [items, itemsDispatch] = useReducer(itemsReducer, []);

  return (
    <ItemContext.Provider value={{ items, itemsDispatch }}>
      {children}
    </ItemContext.Provider>
  );
};

export default CustomProvider;
