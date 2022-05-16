import React, { Component, useState } from "react";
import AddModalBox from "./AddModelBox/AddModalBox";
import "./todo.css";
import Todo_item from "./Todo_item/Todo_item";

// UI
// https://miro.medium.com/max/1400/1*lJ_VieryamJayJNfU4RzOw.png

// export default function Todo() {
//   const [TodoData, setData] = useState([]);

//   const [showModalBox, setShowModalBox] = useState(false);

//   function addTodoList(value) {
//     console.log("data pushing");
//     console.log(value);
//     setData([
//       ...TodoData,
//       {
//         id: TodoData.length + 1,
//         item: value,
//         status: false,
//       },
//     ]);
//   }

//   const monthNames = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   function getCurrentDate() {
//     return String(new Date().getDate()).padStart(2, "0");
//   }
//   function getCurrentMonth() {
//     return String(new Date().getMonth());
//   }
//   function getCurrentDay() {
//     return String(new Date().toLocaleDateString("en-US", { weekday: "long" }));
//   }

//   function getCurrentYear() {
//     return String(new Date().getFullYear());
//   }

//   return (
//     <div className="todo-container">
//       <div className="date_holder">
//         <span>
//           {getCurrentDate()}
//           <ul>
//             <li>{monthNames[getCurrentMonth()]}</li>
//             <li>{getCurrentYear()}</li>
//           </ul>
//         </span>

//         <p>{getCurrentDay()}</p>
//       </div>

//       {TodoData?.map((item, index) => {
//         return (
//           <Todo_item
//             key={item?.id}
//             item={item?.item}
//             status={item?.status}
//             // setStatus={setTodoStatus}
//           />
//         );
//       })}
//       <p className={TodoData.length == 0 ? "no_record_text" : "hide"}>
//         No notes yet ..
//       </p>

//       <div
//         onClick={() => {
//           setShowModalBox(!showModalBox);
//         }}
//         className={showModalBox ? "add_todo_item rotate" : "add_todo_item"}
//       >
//         <i className="fa-solid fa-plus"></i>
//       </div>
//       <AddModalBox
//         showStatus={showModalBox}
//         setStatus={setShowModalBox}
//         addTodoList={addTodoList}
//       />
//     </div>
//   );
// }

export default class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monthNames: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      TodoData: [],
      showModalBox: false,
    };
  }

  getCurrentDate = () => {
    return String(new Date().getDate()).padStart(2, "0");
  };
  getCurrentMonth = () => {
    return String(new Date().getMonth());
  };
  getCurrentDay = () => {
    return String(new Date().toLocaleDateString("en-US", { weekday: "long" }));
  };

  getCurrentYear = () => {
    return String(new Date().getFullYear());
  };

  setShowModalBox = (value) => {
    this.setState({
      showModalBox: value,
    });
  };

  addTodoList = (value) => {
    console.log("data pushing");
    console.log(value);
    this.setState({
      TodoData: [
        ...this.state.TodoData,
        {
          id: this.state.TodoData.length + 1,
          item: value,
          status: false,
        },
      ],
    });

    // console.log(this.state.TodoData);
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(this.state.TodoData);
  }

  render() {
    return (
      <div className="todo-container">
        <div className="date_holder">
          <span>
            {this.getCurrentDate()}
            <ul>
              <li>{this.state.monthNames[this.getCurrentMonth()]}</li>
              <li>{this.getCurrentYear()}</li>
            </ul>
          </span>

          <p>{this.getCurrentDay()}</p>
        </div>

        {this.state.TodoData?.map((item) => {
          return (
            <Todo_item key={item?.id} item={item?.item} status={item?.status} />
          );
        })}
        <p
          className={
            this.state.TodoData.length == 0 ? "no_record_text" : "hide"
          }
        >
          No notes yet ..
        </p>

        <div
          onClick={() => {
            this.setState({
              showModalBox: !this.state.showModalBox,
            });
          }}
          className={
            this.state.showModalBox ? "add_todo_item rotate" : "add_todo_item"
          }
        >
          <i className="fa-solid fa-plus"></i>
        </div>
        <AddModalBox
          showStatus={this.state.showModalBox}
          setStatus={this.setShowModalBox}
          addTodoList={this.addTodoList}
        />
      </div>
    );
  }
}
