export interface Item {
  id: number;
  title: string;
}

interface AddItem {
  type: "ADD";
  item: Item;
}

interface DeleteItem {
  type: "DELETE";
  itemId: number;
}

export type ItemAction = AddItem | DeleteItem;

const tasksReducer = (items: Item[], action: ItemAction): Item[] => {
  switch (action.type) {
    case "ADD":
      return [action.item, ...items];
    case "DELETE":
      return items.filter((item) => item.id !== action.itemId);
    default:
      return items;
  }
};

export default tasksReducer;
