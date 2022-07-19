type TodoItem = {
    text: string;
    complete: boolean;
    id: string;
}

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (text: string) => void;

type EditTodo = (selectedTodo: Todo) => void;

type Dictionary<T> = {
    [key: string]: T;
}