import { useState, useEffect } from 'react'
import Item from './item'
import './App.css'

function App() {
  const initialTodos: string[] = ['read react documentation', 'reat vite documentation', 'do homework'];

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) ?? initialTodos);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function addTodoHandler(e: any) {
    e.preventDefault();

    if (inputValue == '') {
      return;
    } else {
      setTodos([...todos, `${inputValue}`]);
      setInputValue('');
    }
  }

  return (
    <>
      <div>
        {todos.map((el: string, index: number) => {
          return (
            <Item key={index} el={el}/>
          )
        })}
      </div>

      <form>
        <input type='text' placeholder='Ввести задачу' value={inputValue} onChange={(e) => setInputValue((inputValue) => inputValue = e.target.value)}></input>
        <button type='submit' onClick={addTodoHandler}>Добавить</button>
      </form>

      {todos.length >= 4 ? <div>Всего задач: {todos.length}</div> : null}
    </>
  )
}

export default App;
