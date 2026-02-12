import { useReducer } from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  border-radius: 24px;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  .input-wrap {
    display: flex;
    gap: 10px;
    width: 100%;
    height: 54px;
  }

  input.input {
    flex: 1;
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 0 16px;
    color: white;
    font-size: 1rem;
    outline: none;
    transition: all 0.2s ease;
    height: 100%;
    box-sizing: border-box;

    &:focus {
      border-color: rgba(59, 93, 246, 0.6);
      box-shadow: 0 0 0 3px rgba(30, 58, 138, 0.2);
      background: rgba(0, 0, 0, 0.3);
    }

    &::placeholder {
      color: rgba(255, 255, 255, 0.4);
    }
  }

  .add-btn {
    font-size: 1rem;
    height: 100%;
    padding: 0 24px;
    background: rgba(59, 93, 246, 0.2);
    border: 1px solid rgba(59, 93, 246, 0.6);
    border-radius: 12px;
    color: #dbeafe;
    font-weight: 700;
    transform: scale(1);
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: #3b5df6;
      box-shadow: 0 0 15px rgba(59, 93, 246, 0.4);
      transform: scale(1.05);
    }
    &:active {
      transform: scale(0.95);
    }
  }

  .reset-btn {
    height: 100%;
    padding: 0 16px;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    color: rgba(255, 255, 255, 0.6);
    font-weight: 600;
    transition: all 0.2s ease;

    &:hover {
      background: rgba(255, 71, 87, 0.1);
      border-color: #ff4757;
      color: #ff4757;
      transform: scale(1.05);
      box-shadow: 0 0 10px rgba(255, 71, 87, 0.2);
    }
    &:active {
      transform: scale(0.95);
    }
  }

  .todo-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-height: 400px;
  }

  .todo-list li {
    height: 54px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 14px;
    padding: 0 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    transition: all 0.3s ease;

    &:first-of-type {
      margin-top: 20px;
    }

    .content-wrap {
      display: flex;
      align-items: center;
      gap: 12px;
      flex: 1;
      overflow: hidden;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.08);
      border-color: #80233f;
      box-shadow: 0 0 0 2px rgba(128, 35, 63, 0.2);
      transform: translateX(6px);
    }

    input[type="checkbox"] {
      appearance: none;
      width: 20px;
      height: 20px;
      border: 2px solid rgba(255, 255, 255, 0.4);
      border-radius: 6px;

      position: relative;
      flex-shrink: 0;

      &:checked {
        background-color: rgba(128, 35, 63, 0.2);
        border-color: rgba(128, 35, 63, 0.6);
      }
      &:checked::after {
        content: "✔";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -55%);
        font-size: 12px;
        color: white;
      }
    }

    span {
      font-size: 1rem;
      color: white;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &:has(input:checked) span {
      color: rgba(255, 255, 255, 0.4);
      text-decoration: line-through;
    }
  }

  .del-btn {
    width: 34px;
    height: 34px;
    border-radius: 10px;
    border: 1px solid rgba(239, 68, 68, 0.2);
    background: rgba(239, 68, 68, 0.1);
    box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.05);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 7px;
    transition: all 0.2s ease;
    svg {
      width: 100%;
      height: 100%;
      stroke: #ef4444;
      transition: stroke 0.2s ease;
    }

    &:hover {
      background: #ef4444;
      box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.15);
      transform: scale(1.05);

      svg {
        stroke: white;
      }
    }
  }
`;

// 기본값
const initialState = { todos: [], input: "" };

function todoReducer(state, action) {
  switch (action.type) {
    case "INPUT":
      return { ...state, input: action.payload };

    case "ADD":
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), text: action.payload, done: false }],
        input: "",
      };

    case "TOGGLE":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, done: !todo.done } : todo,
        ),
      };

    case "DELITE":
      return { ...state, todos: state.todos.filter((todo) => todo.id !== action.payload) };

    case "RESET":
      return { ...initialState };

    default:
      return state;
  }
}

const TrashIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
  </svg>
);
const PlusIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);
export default function TodoList() {
  const [todoState, dispatch] = useReducer(todoReducer, initialState);

  // 삼항넣으니까 오류가..
  const handleDispatch = (type, payload = null) => dispatch({ type, payload });

  return (
    <Container>
      <div className="input-wrap">
        <input
          className="input"
          type="text"
          value={todoState.input}
          onChange={(e) => handleDispatch("INPUT", e.target.value)}
          placeholder="할 일을 입력해 주세요!"
        />
        <button
          className="add-btn"
          onClick={() =>
            todoState.input.trim()
              ? handleDispatch("ADD", todoState.input)
              : alert("할 일을 입력하세요")
          }
        >
          <PlusIcon />
        </button>
        <button className="reset-btn" onClick={() => handleDispatch("RESET")}>
          RESET
        </button>
      </div>
      <ul className="todo-list">
        {todoState.todos.map((todo) => (
          <li key={todo.id}>
            <div className="content-wrap">
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => handleDispatch("TOGGLE", todo.id)}
              />
              <span>{todo.text}</span>
            </div>
            <button className="del-btn" onClick={() => handleDispatch("DELITE", todo.id)}>
              <TrashIcon />
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
}
