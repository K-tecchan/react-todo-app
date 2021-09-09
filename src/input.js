import { useEffect, useRef, useState } from "react";
import Remove from './remove';
import './css/input.min.css';

const Input = () => {
  // stateを宣言。workを最初は空の配列として宣言
  const [work, setWork] = useState([]);
  // useRefを使うと変数が変更されても更新されない
  const isFirstRun = useRef(true);

  // returnの前の部分で関数とかは定義しておく
  // これはスプレッド構文の左側に入れたい値を置いてる
  const addWork = () => setWork([...work, document.getElementById('text').value]);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    document.title  = work
                    ? `タスクに「${document.getElementById('text').value}」が追加されました`
                    : 'react-todo-app';
  }, [work]);

  return (
    <>
      <ul id='output'>
        {work.map((w, i) => (
          <li id={i} key={i}>
            {w}
            <Remove id={i} work={w}/>
          </li>
        ))}
      </ul>
      <form id="input">
        <input type="text" name='task' id="text"/>
        <input type="text" name='dammy' style={{display: 'none'}}/>
        <button onClick={addWork} type='button' id="add-work">add</button>
      </form>
    </>
  );
}

export default Input;