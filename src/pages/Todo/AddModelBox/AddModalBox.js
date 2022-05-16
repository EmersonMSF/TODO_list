import { useRef, useState } from "react";
import "./AddModalBox.css";

function AddModalBox(props) {
  //   const [showModal, setShowModal] = useState(props.showStatus);

  const [todoContent, setTodoContent] = useState("");
  const item_value = useRef(null);

  return (
    <>
      <div className={props.showStatus ? "overlay active" : "overlay"}></div>
      <div
        className={
          props.showStatus
            ? "AddTodoItem_container active"
            : "AddTodoItem_container"
        }
      >
        {/* <p>Add Item</p> */}

        <textarea
          placeholder="Say Something.. "
          ref={item_value}
          value={todoContent}
          onChange={(newValue) => {
            setTodoContent(newValue.value);
          }}
        />

        <div
          onClick={() => {
            console.log("hello");
            props.addTodoList(item_value.current.value);
            props.setStatus(false);
            setTodoContent("");
          }}
          className="action_btns"
        >
          <button>Add Item</button>
        </div>
      </div>
    </>
  );
}

export default AddModalBox;
