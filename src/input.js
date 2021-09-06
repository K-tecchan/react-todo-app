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
    const output = document.getElementById('output');
    const task = document.createElement('li');
    const taskText = document.createTextNode(work);
    task.appendChild(taskText);
    output.appendChild(task);
  }, [ work ]);

  return (
    <>
      <ul id='output'></ul>
      <div>
        <form onSubmit={() => false}>
          <input type="text" name='task' id="text"/>
          <input type="text" name='dammy' style={{display: 'none'}}/>
          <button onClick={() => setWork(work => work = document.getElementById('text').value)} type='button'>enter</button>
        </form>
      </div>
    </>
  );
}

export default Input;