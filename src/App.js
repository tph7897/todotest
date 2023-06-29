import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, contents: 'todolist 만들기' }
  ]);

  const [contents, setcontents] = useState('');

  // 내용필드 변경
  const oncontentsChangeHandler = (event) => {
    setcontents(event.target.value);
  }
  // 추가하기 버튼
  const addTodoButtonHandler = () => {
    const newTodo = {
      id: todos.length + 1,
      contents: contents
    };
    setTodos([...todos, newTodo]);
    setcontents('')
  };

  return (
    <div>
      <div className='top'>
        <div className='input-container'>
          <input type='text' value={contents} onChange={oncontentsChangeHandler} />
          <button className='plusbutton' onClick={addTodoButtonHandler}>추가하기</button>
        </div>
        <h2>Todo List</h2>
      </div>
      <div className="list-container">
        {todos.map((item) => (
          <div key={item.id} className="todo-container">
            <p>{item.contents}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
