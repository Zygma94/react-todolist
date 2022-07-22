import React, { useState } from 'react';


type FormProp = {
    addTodo: AddTodo;
}


export const AddTodoForm: React.FC<FormProp> = ({ addTodo }) => {
    const [text, setText] = useState('');

    const onGuardar = () => {
        if (text.length > 0) {
            addTodo(text);
            setText('');
        }
    };

    return (
        <form>
            <input type="text"
                value={text}
                onChange={
                    (e) => {
                        setText(e.target.value);
                    }}
            />
            <button type="button" className="boton-agregar"
                onClick={onGuardar}><b>Agregar Tarea</b></button>
        </form>
    );
};