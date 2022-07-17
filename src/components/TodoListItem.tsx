import React from 'react';
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";


type ItemProp = {
    todo: TodoItemProp;
    toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<ItemProp> = ({ todo, toggleTodo }) => {
    return (
        <li>
            <div style={{ textDecoration: todo.complete ? 'line-through' : undefined }}>
                <input type='checkbox' checked={todo.complete} onClick={() => {
                    toggleTodo(todo);
                }
                } />{' '}
                {todo.text}
            </div>
        </li>
    );
};
