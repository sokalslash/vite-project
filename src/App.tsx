import { useState, useEffect } from 'react'
import Item from './Item.tsx'
import './App.css'

function App() {
  function generateId(num: number): number {
    return Math.random() + num;
  }

  const initialTodos = [
    {
      id: generateId(1),
      title: 'read react documentation',
    },
    {
      id: generateId(2),
      title: 'reat vite documentation',
    },
    {
      id: generateId(3),
      title: 'do homework',
    },
  ];

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos") ?? JSON.stringify(initialTodos)));
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function addTodoHandler(e: any) {
    e.preventDefault();

    if (inputValue == '') {
      return;
    } else {
      let newTask = {
        id: generateId(initialTodos.length),
        title: inputValue,
      }
      setTodos([...todos, newTask]);
      setInputValue('');
    }
  }

  return (
    <>
      <div>
        {todos.map(({ id, title }: {id: number; title: string}) => {
          return (
            <Item key={id} el={title}/>
          )
        })}
      </div>

      <form>
        <input type='text' placeholder='Ввести задачу' value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
        <button type='submit' onClick={addTodoHandler}>Добавить</button>
      </form>

      {todos.length >= 4 ? <div>Всего задач: {todos.length}</div> : null}
    </>
  )
}

export default App;
