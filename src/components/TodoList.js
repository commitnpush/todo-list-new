import React from "react";
import styled from "styled-components";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  state = {
    items: [{ id: 1, content: "청소하기" }, { id: 2, content: "빨래하기" }]
  };
  render() {
    return (
      <TodoListWrapper>
        <div className="todo-list">
          <div className="todo-list__header">TODO LIST</div>
          <TodoInput />
          <div className="todo-items">
            {this.state.items.map(el => (
              <TodoItem id={el.id} content={el.content} />
            ))}
          </div>
        </div>
      </TodoListWrapper>
    );
  }
}

const TodoListWrapper = styled.div`
  background-color: #ccc;
  height: 100vh;
  padding: 0 20px;
  .todo-list {
    background-color: #fff;
    max-width: 400px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);

    &__header {
      text-align: center;
      padding: 20px 0;
      background-color: #50c9c3;
      color: white;
      font-size: 25px;
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
    }
  }
`;

export default TodoList;
