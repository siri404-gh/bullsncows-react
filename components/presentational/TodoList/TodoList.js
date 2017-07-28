import React from 'react';
import { SingleTodo } from '../SingleTodo/SingleTodo';

export const TodoList = ({todos, onTodoClick}) => {
    return (
    <ul>
        {todos.map(todo => 
            <SingleTodo 
                key={todo.id} 
                onTodoClick={id => onTodoClick(todo.id)} 
                task={todo.task} 
                done={todo.done}/>
        )}
    </ul>
    );
};