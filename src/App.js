import React, { useState } from 'react';
import './App.css';
import Input from './Components/Input';
import Task from './Components/Task';

function App() {
  const [list, setList] = useState([]);

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center" style={{ width: "800px" }}>
      <Input list={list} setList={setList} />
      {list.map((task, i) => (
        <Task task={task} setList={setList} index={ i } list={ list }/>
      ))}
    </div>
  );
}

export default App;
