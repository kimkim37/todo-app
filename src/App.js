import React, {useState, useRef, useCallback} from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

//  useState으로 todos라는 상태 정의 후 TodoList.js에 전달, 각항목에 고유id 내용 완료 여부 설정
function createBulkTodos() {
    const array = [];
    for (let i=1; i<= 2500; i++) {
        array.push({
            id: 1,
            text: `할 일 ${i}`,
            checked: false,        
        });
    }
    return array;
}

const App = () => { const [todos, setTodos] = useState(createBulkTodos);

// 고윳값으로 사용될 id, ref를 사용하여 변수담기
const nextId = useRef(2501);

const onInsert = useCallback(
    text => {
        const todo = {
            id: nextId.current,
            text,
            checked: false,
        };
        setTodos(todos.concat(todo));
        nextId.current += 1; // nextId 1씩 더하기
    }, [todos],);

const onRemove = useCallback(
    id => { setTodos(todos.filter(todo => todo.id !==id)); 
    },[todos],);

const onToggle = useCallback(
    id=> {setTodos(
        todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked}:todo,),
    );
},[todos],
);

    return(
        <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
        </TodoTemplate>
    );
};
export default App;