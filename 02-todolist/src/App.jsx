import { useEffect, useState } from 'react'
import ToDoList from './components/TodoList'

function App() {

  // create state chứa mảng toDoList => dùng state này để re-render UI khi client add task
  const [toDoList, setToDoList] = useState(() => {
    const toDoList = localStorage.getItem('toDoList')
    if (toDoList) {
      return JSON.parse(toDoList)
    }
    return []
  })


  useEffect(() => {
    localStorage.setItem('toDoList', JSON.stringify(toDoList))
  }, [toDoList])


  const onAdd = (value) => {
    const task = {
      id: Math.random() + '-' + Date.now(),
      isCompleted: false,
      content: value,
    }
    setToDoList([...toDoList, task]);
    // question here: sao không dùng được phương thức này cho setState
    // setToDoList(toDoList.push(task))
  }

  const onCompleted = (id) => {
    console.log('hello');
    let task = toDoList.find(element => element.id === id)
    if (task) {
      task.isCompleted = true;
    }
    setToDoList([...toDoList])
  }

  return (
    // => truyền state vào trong component
    <>
      <ToDoList toDoList={toDoList} onAdd={onAdd} onCompleted={onCompleted} />
    </>
  )
}

export default App
