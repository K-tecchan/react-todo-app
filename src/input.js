import { useEffect, useRef, useState } from "react";
import Remove from './remove';

const Input = () => {
  const [work, setWork] = useState([]);
  const isFirstRun = useRef(true);

  const addWork = () => setWork([...work, document.getElementById('text').value]);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    document.title  = work
                    ? `タスクに「${document.getElementById('text').value}」が追加されました`
                    : 'react-todo-app';
    console.log(work);
  }, [work]);

  return (
    <>
      <ul id='output'>
        {work.map((w, i) => (
          <li id={i} key={i}>
            {w}
          </li>
        ))}
      </ul>
      <div>
        <form>
          <input type="text" name='task' id="text"/>
          <input type="text" name='dammy' style={{display: 'none'}}/>
          <button onClick={addWork} type='button'>enter</button>
        </form>
      </div>
    </>
  );
}

export default Input;