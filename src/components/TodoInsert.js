import React, { useState, useCallback } from 'react';
import {IoMdFlame} from 'react-icons/io';
import './TodoInsert.scss';


const TodoInsert = ({onInsert}) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {setValue(e.target.value);}, []);

    const onSubmit = useCallback(e => {onInsert(value); setValue(''); e.preventDefault();},[onInsert, value],); 
    //submit 이벤트는 브라우저에서 새로고침을 발생시킴, 이를 방지 하기 위해 e.preventDefault를 호출

    return(
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder = "할 일을 입력하세요" 
            value={value}
            onChange={onChange}
            />
            <button type="submit">
                <IoMdFlame />
            </button>
        </form>
    );
};

export default TodoInsert;