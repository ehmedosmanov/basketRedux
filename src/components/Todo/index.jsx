import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, updateTodo } from "../../features/Todo/todoAppSlice";
import "./index.scss";
const TodoApp = () => {
  const [value, setValue] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const myTodos = useSelector((state) => state.todoApp.todos);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleAddTodo = () => {
    dispatch(addTodo({ id: Date.now(), text: value }));
    setValue("");
  };

  const handleRemoveTodo = (id) => {
    dispatch(
      removeTodo({
        todoId: id,
      })
    );
  };

  const handleEditTodo = (id) => {
    const updateTodo = myTodos.find(x => x.id === id)
    setValue(updateTodo.text)
    setEditMode(true);
    setEditId(id);
  };

  const handleSaveTodo = () => {
    dispatch(updateTodo({
        todoId: editId,
        updatedText: value
    }))
    setEditMode(false)
    setValue('')
  }
  return (
    <div className="todo">
      <div className="top-todo">
        <div className="todo-box">
          <input
            onChange={(e) => handleChange(e)}
            className="todo-inp"
            value={value}
            type="text"
            placeholder="Enter Todo"
          />
        </div>
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <div className="todo-list">
        <ul className="list">
          {myTodos &&
            myTodos.map((item) => (
              <li>
                <p>{item.text}</p>
                <div className="btns">
                  <button
                    className="remove-btn"
                    onClick={() => handleRemoveTodo(item.id)}
                  >
                    Remove
                  </button>
                  {editMode && item.id === editId ? (
                    <button className="save-btn" onClick={handleSaveTodo}>Save</button>
                  ) : (
                    <button
                      className="edit-btn"
                      onClick={() => handleEditTodo(item.id)}
                    >
                      Edit
                    </button>
                  )}
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
