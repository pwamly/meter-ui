import React from "react";
import "./App.css";
import { editProfile,editAccount } from "./redux/store";
import { useDispatch,useSelector } from "react-redux";

function App() {
  const dispatch=useDispatch();
  const {editProfile:edit} = useSelector((state:any)=>state.profile);
  const {accountName} = useSelector((state:any)=>state.account);

  return (
    <div>
      <header>
        {1?<h1>hello edit? {accountName}</h1>:<h1>pwamly{accountName}</h1>}
        <button onClick={() => dispatch(editAccount('pwamly'))}>change</button>
      </header>
    </div>
  );
}

export default App;
