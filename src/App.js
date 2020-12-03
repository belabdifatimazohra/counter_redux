import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment,decrement } from "./redux/actions/counterAction";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.count);
  return (
    <div className="App">
      <div>
        <h1 style={{ color: "#ffffff" }}> Counter Redux </h1>
      </div>
      <div style={{display:"flex", justifyContent:"center"}}>
        <span className="Btn" onClick={() => dispatch(decrement())}>
          -
        </span>
        <span style={{ color: "#ffffff", width: "40%" }}>{counter}</span>
        <span className="Btn" onClick={() => dispatch(increment())}>
          +
        </span>
      </div>
    </div>
  );
}

export default App;
