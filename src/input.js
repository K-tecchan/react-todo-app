import { useEffect, useRef, useState } from "react";

const Input = () => {
  const [ work, setWork ] = useState('');
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    document.title  = work 
                    ? `タスクに${work}が追加されました`
                    : 'react-todo-app';
    let output = document.getElementById('output');
    let task = document.createElement('li');
    let taskText = document.createTextNode(work);
    task.appendChild(taskText);
    output.appendChild(task);
  });

  return (
    <>
      <ul id='output'></ul>
      <div>
        <form>
          <input type="text" id="text"/>
          <button onClick={() => setWork(work => work = document.getElementById('text').value)} type='button'>enter</button>
        </form>
      </div>
    </>
  );
}

export default Input;