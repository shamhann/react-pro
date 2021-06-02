import React, {useEffect} from 'react';
import Users from "./Users";
import Todos from "./Todos";
import {useDispatch, useSelector} from "react-redux";
import {loadTodos, loadUsers} from "../redux/action";



function App(props) {
    const dispatch = useDispatch();

    const loadingUsers = useSelector(state => state.loadingUsers);
    const loadingTodos = useSelector(state => state.loadingTodos)

    useEffect(() => {
        dispatch(loadUsers());
        dispatch(loadTodos());
    },[])

    if (loadingUsers || loadingTodos){
        return (
            <div>
                loading
            </div>
        )
    }
    return (

      <div className='container'>
          <Users/>
          <Todos/>
      </div>
    );
}

export default App;