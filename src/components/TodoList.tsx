import { TodoListItem } from './TodoListItem';

type ItemsProp = {
    todos: TodoItemProp[];
    toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<ItemsProp> = ({ todos, toggleTodo }) => {
return (
    <ul className='tareas'>
        {todos.map((todo) => (
            <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
        ))}
    </ul>
);
};
