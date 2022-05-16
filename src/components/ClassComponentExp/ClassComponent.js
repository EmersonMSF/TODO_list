import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      data: [
        {
          id: 1,
          name: "emerson",
          age: 20,
        },
        {
          id: 2,
          name: "crash",
          age: 25,
        },
        {
          id: 3,
          name: "BR",
          age: 30,
        },
      ],
    };
  }

  //   sayNames = () => {};

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  populateTable = () =>
    this.state.data.map((item) => (
      <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.age}</td>
      </tr>
    ));

  render = () => (
    <>
      <div>
        <h1> Counter : {this.state.counter}</h1>

        <button onClick={this.increment}>Click Me !</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody>{this.populateTable()}</tbody>
      </table>
    </>
  );
}
