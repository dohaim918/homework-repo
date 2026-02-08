import { useState } from "react";

export default function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInput = (e) => setInput(e.target.value);
  const handleAdd = () => {
    if (!input.trim()) return;
    const newTodo = {
      id: Date.now(),
      text: input,
    };
    setTodos((p) => [...p, newTodo]);
    setInput("");
  };
  const handeleDel = (id) => setTodos((prev) => prev.filter((t) => t.id !== id));

  const TrashIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      <line x1="10" y1="11" x2="10" y2="17" />
      <line x1="14" y1="11" x2="14" y2="17" />
    </svg>
  );
  return (
    <div className="card">
      <div className="input-wrap">
        <input
          className="input"
          type="text"
          value={input}
          onChange={handleInput}
          placeholder="할 일을 입력해 주세요!"
        />
        <button className="add-btn" onClick={handleAdd}>
          추가
        </button>
      </div>
      <ul className="todo-list">
        {todos.map((t) => (
          <li key={t.id}>
            {t.text}
            <button className="del-btn" onClick={() => handeleDel(t.id)}>
              <TrashIcon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
