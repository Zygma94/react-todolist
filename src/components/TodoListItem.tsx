import React from 'react';


type ItemProp = {
    todo: TodoItem;
    toggleTodo: ToggleTodo;
    toggleEditModeHandler: ToggleTodo;
}

export const TodoListItem: React.FC<ItemProp> = ({ todo, toggleTodo, toggleEditModeHandler }) => {
    return (
        <li>
            <div style={{ textDecoration: todo.complete ? 'line-through' : undefined }}>
                <input type='checkbox' checked={todo.complete} onClick={() => {
                    toggleTodo(todo);
                }
                } />{' '}
                {todo.text}
                <button className='Editar' onClick={toggleEditModeHandler}><b>Editar</b></button>
            </div>
        </li>
    );
};
