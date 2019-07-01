import React from "react";
import styled from "styled-components";

class TodoInput extends React.Component {
  render() {
    return (
      <TodoInputWrapper>
        <div className="todo-input">
          <input className="todo-input__input" type="text" />
          <button className="todo-input__action" type="button">
            Add
          </button>
        </div>
      </TodoInputWrapper>
    );
  }
}

const TodoInputWrapper = styled.div`
  padding: 20px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 20px;
  .todo-input {
    display: flex;
    &__input {
      border: none;
      border-bottom: 2px solid #aaa;
      outline: none;
      flex-grow: 1;
      font-size: 15px;
      &:focus {
        border-bottom-color: #50c9c3;
      }
    }
    &__action {
      margin-left: 10px;
      border: 0;
      background-color: #50c9c3;
      color: #fff;
      padding: 7px 10px;
      outline: none;
      cursor: pointer;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
      &:hover {
        background-color: #fd79a8;
      }
    }
  }
`;

export default TodoInput;
