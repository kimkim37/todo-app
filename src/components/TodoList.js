import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';


//props로 받아온 todos(App.js) 배열을 내장 함수 map을 통해 TodoListItem으로 이루어진 배열로 변환 
const TodoList = ({todos, onRemove, onToggle}) => {
    return(
        <div className="TodoList">
            {todos.map(todo=> (<TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>))}
        </div>
    );
};
// todo데이터를 통쨰로 props로 전달
export default TodoList;