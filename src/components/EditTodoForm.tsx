import React, { useState } from 'react';


type FormProp = {
    editTodo: EditTodo;
    todo: TodoItem;
    toggleEditModeHandler: ToggleTodo;
}


export const EditTodoForm: React.FC<FormProp> = ({ editTodo, todo, toggleEditModeHandler }) => {
    const [text, setText] = useState(todo.text);

    const onGuardar = () => {
        if (text.length > 0) {
            editTodo({...todo, text});
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
                onClick={onGuardar}>Editar Tarea</button>
                <button className='boton-cancelar' onClick={toggleEditModeHandler}>Cancelar edición</button>
        </form>
    );
};