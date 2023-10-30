import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import { getUserFetch } from './actions';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state:any) => state?.myFirstReducer?.user);
  console.log(user)
  return (
    <div className="App">
      <button onClick={() => dispatch(getUserFetch())}>Get Users</button>
      User: {user.map((users:any) => {
        return(
          <div>{users.name}</div>
        )
      })}
    </div>
  );
}

export default App;
