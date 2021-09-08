// props.idとして受け取るところをオブジェクトの分割代入でidとして受け取り
const Remove = ({ id }) => {

  const removeWork = () => {
    const target = document.getElementById(id);
    target.remove();
  };

  return (
    <div>
      <button onClick={removeWork}>remove</button>
    </div>
  );
}

export default Remove;