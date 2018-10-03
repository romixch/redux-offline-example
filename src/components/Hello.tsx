import * as React from "react";
import { Item } from "../types";

export interface Props {
  name: string;
  enthusiasmLevel?: number;
  items: Item[];
  onIncrement?: () => void;
  onDecrement?: () => void;
  onAddItem?: () => void;
}

function Hello({
  name,
  enthusiasmLevel = 1,
  items,
  onIncrement,
  onDecrement,
  onAddItem
}: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error("You could be a little more enthusiastic. :D");
  }

  console.log("render", items);
  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      <div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>

      <div>
        <h3>items:</h3>
        <button onClick={onAddItem}>Add Item</button>
        {items.map(item => (
          <div key={item.id}>Item Id: {item.id}</div>
        ))}
      </div>
    </div>
  );
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join("!");
}
