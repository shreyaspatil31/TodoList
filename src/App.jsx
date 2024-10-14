import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';

function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setshowFinished] = useState(true)

  useEffect(() => {
    let todoString = localStorage.getItem('todos')
    if (todoString) {
      try {
        let todos = JSON.parse(todoString);  // Only parse if not null
        setTodos(todos);
      } catch (e) {
        console.error("Error parsing todos from localStorage", e);
      }
    }
  }, [])

  const toggleFinished = (params) => {
    setshowFinished(!showFinished);
  }

  const handleAdd = () => {
    const newTodos = [...todos, { id: uuidv4(), todo, isCompleted: false }];
    setTodos(newTodos);
    setTodo("");
    saveToLS(newTodos);
  }

  const handleEdit = (id) => {
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo);
    let newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
    saveToLS(newTodos);
  }

  const handleDelete = (id) => {
    let newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
    saveToLS(newTodos);
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveToLS(newTodos);
  }

  const saveToLS = (updatedTodos) => {
    localStorage.setItem('todos', JSON.stringify(updatedTodos))
  }

  return (
    <>
      <Navbar />
      <div className="md:container bg-violet-200 md:w-1/2 mx-3 md:mx-auto my-5 rounded-xl p-5 min-h-[80vh]">
        <h1 className='font-bold text-center text-3xl'>iTask - Manage your todos at one place</h1>
        <div className="addTodo my-5 flex flex-col">
          <h2 className='text-2xl font-bold'>Add a Todo</h2>
          <div className='flex'>
            <input onChange={handleChange} value={todo} type="text" className='w-full rounded-xl px-4 py-1' />
            <button onClick={handleAdd} disabled={todo.length <= 3} className='bg-violet-800 hover:bg-violet-900 text-sm font-bold px-4 py-1 text-white rounded-full mx-2 disabled:bg-violet-700'>Save</button>
          </div>
        </div>

        <input className='my-4' onChange={toggleFinished} type="checkbox" checked={showFinished} /> Show Finished
        <h2 className='text-2xl font-bold'>Your Todos</h2>
        <div className="todos">
          {todos.length === 0 && <div className='m-5'>No Todos</div>}
          {todos.map(item => {
            return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex justify-between my-3">
              <div className='flex gap-5'>
                <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} />
                <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
              </div>
              <div className="buttons">
                <button onClick={(e) => { handleEdit(item.id) }} className='bg-violet-800 hover:bg-violet-900 text-sm font-bold px-2 py-1 text-white rounded-md mx-2'><FaEdit /></button>
                <button onClick={(e) => { handleDelete(item.id) }} className='bg-violet-800 hover:bg-violet-900 text-sm font-bold px-2 py-1 text-white rounded-md mx-2'><AiFillDelete /></button>
              </div>

            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App;
