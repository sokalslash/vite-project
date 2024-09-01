import { useState, useEffect, MouseEvent } from 'react'
import { generateId } from './utils';
import { Task } from './types.ts'
import Item from './Item.tsx'
import './App.css'

function App({ tasks }: { tasks: Task[]}) {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos") ?? JSON.stringify(tasks)));
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    console.log('mouting');
    localStorage.setItem('todos', JSON.stringify(todos));
    return console.log('unmouting');
  }, [todos]);

  function addTodoHandler(e: MouseEvent | KeyboardEvent) {
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

  function deleteHandler(id: number) {
    console.log(id);
    setTodos((prevState: Task[]) => prevState.filter((task: Task) => task.id !== id));
  }

  return (
    <>
      <div>
        {todos.map(({ id, title }: {id: number; title: string}) => {
          return (
            <Item key={id} id={id} title={title} onClick={deleteHandler} />
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