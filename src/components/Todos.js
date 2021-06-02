import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Todo from "./Todo";
import {setFilterText} from "../redux/action";

function Todos(props) {
    const todos = useSelector(state => state.todos);
    const selectedUserId = useSelector(state => state.selectedUserId);
    const filter = useSelector(state => state.filter);

    const dispatch = useDispatch();

    const filteredTodos = todos
        .filter(todo => todo.userId === selectedUserId)
        .filter(todo => todo.title.indexOf(filter) > -1)
    const handleChangeFilter = (event) => {
        dispatch(setFilterText(event.target.value))
    }
    if (selectedUserId === null){
        return (
            <div className='no-user-selected'>
                выберите автора
            </div>
        )
    }
    return (
        <div className='todos'>
            <div className='filter'>
                <input type="text"
                       placeholder='поиск текста'
                       value={filter}
                        onChange={handleChangeFilter}/>
            </div>
            <ul>
                {filteredTodos.map(todo => {
                    return <Todo key={todo.id} todo={todo}/>
                })}
            </ul>
        </div>
    );
}

export default Todos;