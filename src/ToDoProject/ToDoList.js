import React, { Component } from "react";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";

class ToDoList extends Component {
  state = {
    todos: [],
    number: 0,
    toShow: "all",
    toggle: true,
  };

  addToDo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos],
    });
  };

  changeComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        //supposed to update
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        }
        return todo;
      }),
    });
  };

  countActive = () => {
    this.state.todos.map((todo) => {
      if (todo.complete) {
        this.setState({
          ...todo,
          number: (this.state.number += 1),
        });
      }
    });
    return this.state.number;
  };

  showAll = (event) => {
    this.setState({
      toShow: [event.target.name],
    });
  };

  delete = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id != id),
      //deltete if id matches
    });
  };

  deleteAll = () => {
    this.setState((state) => ({
      todos: state.todos.filter((todo) => !todo.complete),
    }));
  };

  toggleAll = () => {
    if (this.state.toggle === true) {
      this.setState({
        todos: this.state.todos.map((todo) => {
          if (!todo.complete) {
            todo.complete = true;
          }
          return todo;
        }),
        toggle: false,
      });
    } else if (this.state.toggle === false) {
      this.setState((state) => ({
        todos: this.state.todos.map((todo) => {
          if (todo.complete) {
            todo.complete = false;
          }
          return todo;
        }),
        toggle: true,
      }));
    }
  };

  render() {
    let todos = [];

    if (this.state.toShow === "all") {
      todos = this.state.todos;
    } else if (this.state.toShow === "active") {
      todos = this.state.todos.filter((todo) => !todo.complete);
    } else if (this.state.toShow === "complete") {
      todos = this.state.todos.filter((todo) => todo.complete);
    }

    return (
      <div>
        <ToDoForm onSubmit={this.addToDo}></ToDoForm>
        {/*displaying the todos */}

        {todos.map((todo) => (
          <ToDo
            key={todo.id}
            todo={todo}
            changeComplete={() => this.changeComplete(todo.id)}
            delete={() => this.delete(todo.id)}
          />
        ))}

        <div>
          Numer of Active items: ={" "}
          {this.state.todos.filter((todo) => !todo.complete).length}{" "}
        </div>
        <div>
          <button
            name="all"
            onClick={() => {
              this.setState({ toShow: "all" });
            }}
          >
            All
          </button>
          <button
            name="active"
            onClick={() => {
              this.setState({ toShow: "active" });
            }}
          >
            Active
          </button>
          <button
            name="complete"
            onClick={() => {
              this.setState({ toShow: "complete" });
            }}
          >
            Complete
          </button>

          {this.state.todos.some((todo) => todo.complete) ? (
            <button onClick={this.deleteAll}>Delete All Complete Items</button>
          ) : null}
        </div>

        <button onClick={this.toggleAll}>
          Toggle All Complete: {`${!this.state.toggle}`}
        </button>
      </div>
    );
  }
}

export default ToDoList;
