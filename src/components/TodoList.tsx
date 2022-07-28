import { TodoListItem } from './TodoListItem';
import { useState } from 'react';
import { EditTodoForm } from './EditTodoForm';



type ItemsProp = {
    todos: TodoItem[];
    toggleTodo: ToggleTodo;
    editTodo: EditTodo;
}

export const TodoList: React.FC<ItemsProp> = ({ todos, toggleTodo, editTodo }) => {

    const [editMode, setEditMode] = useState<Dictionary<boolean>>(todos.reduce((dic, todo) => ({ ...dic, [todo.id]: false }), {}));

    const toggleEditModeHandler = (todo: TodoItem) => {
        setEditMode({ ...editMode, [todo.id]: !editMode[todo.id] });
    }

    const editTodoHandler = (todo: TodoItem) => {
        editTodo(todo);
        if (todo.text.length > 0) {
            toggleEditModeHandler(todo);
        }
    }

    return (
        <ul className='tareas'>
            {todos.map((todo) => (
                !editMode[todo.id] ?

                    <TodoListItem key={todo.id} todo={todo} toggleTodo={toggleTodo} toggleEditModeHandler={()=> toggleEditModeHandler(todo)} />
                    : <EditTodoForm todo={todo} editTodo={editTodoHandler} key={todo.id} toggleEditModeHandler={() => toggleEditModeHandler(todo)} />
            ))}
        </ul>
    );
};
