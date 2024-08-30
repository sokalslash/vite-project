import { useState, useEffect } from 'react'
import { generateId } from './utils';
import Item from './Item.tsx'
import './App.css'

function App({ tasks }: any) {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos") ?? JSON.stringify(tasks)));
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
        id: generateId(tasks.length),
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
            <Item key={id} title={title}/>
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
