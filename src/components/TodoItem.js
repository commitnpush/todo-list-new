import React from "react";
import styled from "styled-components";

function TodoItem(props) {
  return (
    <TodoItemWrapper>
      <div className="todo-item">
        <div className="todo-item__content">{props.content}</div>
        <div className="todo-item__actions">
          <button type="button">완료</button>
          <button type="button">삭제</button>
        </div>
      </div>
    </TodoItemWrapper>
  );
}

const TodoItemWrapper = styled.div`
  .todo-item {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    &__content {
      flex-grow: 1;
      font-weight: 300;
    }
    &__actions {
      button {
        cursor: pointer;
        & + button {
          margin-left: 5px;
        }
      }
    }
  }
  border-bottom: 1px solid #eee;
`;

export default TodoItem;
