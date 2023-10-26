import { useState } from 'react';
import InputTodo from './InputTodo';
import ListTodo from './ListTodo';

const initialTodos = [
    {id: 1, name:"Todo 1", isCompleted: false},
    {id: 2, name:"Todo 2", isCompleted: false},
];

const Todo = () =>{

    const [todos, addTodos] = useState(initialTodos);
    const [value, setValue] = useState("");

    function saveValue(event) {
        setValue(event.target.value);
    }

    function addList() {
        addTodos([...todos,{id: todos.length + 1, name: value, isCompleted: value}]);
    }

    return (
        <div>
            <InputTodo ChangeInput={saveValue} Value={value} ClickButton={addList} />
            <ListTodo Todos={todos} setTodos={addTodos} />
        </div>
    );
}


export default Todo;