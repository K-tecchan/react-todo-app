import { useEffect, useState } from "react";

const Input = () => {
  const [ work, setWork ] = useState('');
  useEffect(() => {
    document.title = work;
    let output = document.getElementById('output');
    // let working = `<li>${work}</li>`
    // output.insertBefore(working, null);
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