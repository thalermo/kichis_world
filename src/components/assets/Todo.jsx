import { useState } from 'react';

import './Todo.css';
import { TodoBtn } from './Buttons';

const Todo = () => {
  //const [userName, setUserName] = useState('');
  const [oneTask, setOneTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  //const [taskTime, setTaskTime] = useState('');

  const addTask = () => {
    setTaskList([...taskList, oneTask]);

    // let task2local = {
    //   task: oneTask,

    let localEntry = JSON.parse(localStorage.getItem('users'));
    let currentUserEntry = localStorage.getItem('currentUser');

    let index = localEntry.findIndex(
      (element) => element.email === currentUserEntry
    );

    localEntry[index] = {
      ...localEntry[index],
      task: oneTask,
      time: '20.05.22',
    };
    console.log(localEntry);
    console.log(localStorage);
    localStorage.setItem('users', JSON.stringify(localEntry));
    console.log(localStorage);

    // const localTaskEntry = JSON.parse(localStorage.getItem('tasks') || '[]');
    // tasks.push(task2local);
    //! push the information to the last property in the welcome array

    //   window.localStorage.setItem('tasks', JSON.stringify('task2local'));
  };

  const taskListContent = taskList.map((task, index) => {
    return (
      <div>
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
