import { useState } from 'react';

import './Todo.css';
import { TodoBtn } from './Buttons';

// const year = current.getFullYear();
// const month = current.getMonth();
// const day = current.getDay();

//console.log(year, month, day);

const Todo = () => {
  //const [userName, setUserName] = useState('');
  const [oneTask, setOneTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  //const [taskTime, setTaskTime] = useState('');
  const [taskDate, setDate] = useState('');

  const addTask = () => {
    setTaskList([...taskList, oneTask]);

    const today = new Date();
    const taskDateStamp =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      (today.getDay() + 1);

    // let task2local = {
    //   task: oneTask,

    let localEntry = JSON.parse(localStorage.getItem('users'));
    let currentUserEntry = localStorage.getItem('currentUser');

    //getting just number
    let index = localEntry.findIndex(
      (element) => element.email === currentUserEntry
    );

    localEntry[index] = {
      ...localEntry[index],
      task: oneTask,
      time: taskDateStamp,
    };

    //console.log(localEntry);
    //console.log(localStorage);
    localStorage.setItem('users', JSON.stringify(localEntry));
    //console.log(localStorage);
  };

  const taskListContent = taskList.map((task, index) => {
    return (
      <div key={index}>
        <button onClick={() => handleDelete(index)}></button>
      </div>
    );
  });

  const handleDelete = (index) => {
    const duplicateArray = [...taskList];
    duplicateArray.splice(index, 1);
    setTaskList(duplicateArray);
  };

  return (
    <div className="todo stage">
      <div className="todo-frame">
        <div className="task-form">
          <div className="todo--bubble">
            <div className=" type_effect--todo">
              Tell me what is your daily Tasuku
            </div>
          </div>
          <input
            placeholder="write your Tasuku here..."
            className="user-input"
            type="text"
            onChange={(e) => {
              setOneTask(e.target.value);
            }}
          />

          <TodoBtn action={addTask} />
        </div>
      </div>
      {taskListContent}
    </div>
  );
};

export default Todo;
