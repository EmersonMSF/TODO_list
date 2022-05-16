import { useState } from "react";
import "./todo_item.css";

export default function Todo_item(props) {
  const [itemStatus, setItemStatus] = useState(props.status);

  return (
    <div
      className={props.status === false ? "todo_item" : "todo_item completed"}
    >
      <p>{props.item}</p>
      <span
        onClick={() => {
          setItemStatus(!itemStatus);
        }}
        className="check"
      >
        <i
          className={
            itemStatus === false
              ? "fa-solid fa-check"
              : "fa-solid fa-check active"
          }
        ></i>
      </span>
    </div>
  );
}
