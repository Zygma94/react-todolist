import React, { useState } from 'react';


type FormProp = {
    addTodo: AddTodo;
}


export const AddTodoForm: React.FC<FormProp> = ({ addTodo }) => {
    const [text, setText] = useState('');

    
    
    return (
        <form>
            <input type="text"
                value={text}
                onChange={
                    (e) => {
                        setText(e.target.value);
                    }}
            />
            <button type="submit" className="boton-agregar"
                onClick={(e) => {
                    e.preventDefault();
                    addTodo(text);
                    setText('');
                }}>Agregar Tarea</button>
        </form>
    );
};