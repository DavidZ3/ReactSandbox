import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  // (items: string) => void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // const items = Array();

  const getMessage = () => {
    return items.length == 0 ? <p>No items found</p> : null;
  };

  // Event Handler
  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };

  return (
    <>
      <h1>{heading}</h1>
      {/* {getMessage()} */}
      {items.length === 0 && <p> No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={selectedIndex == index ? "list-group-item active" : "list-group-item"}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
