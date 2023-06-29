import React, { useState, useEffect } from 'react';
import Todo from './Todo.js'
import TodoInput from './TodoInput.js'

export default function App(){
	const [todo, setTodo] = useState("");
	const [todos, setTodos] = useState([]);
	useEffect(() => {
		const todosList = localStorage.getItem("todos")
		if(todosList !== undefined && todosList !== null){
			setTodos(JSON.parse(todosList));
		}
	}, [])
	function onTextChange(e){
		setTodo(e.target.value);
	}
	function onButtonClick(e){
		todos.push(todo);
		setTodos(todos);
		localStorage.setItem("todos", JSON.stringify(todos));
		setTodo("");
	}
	function onTodoDelete(e){
		let newTodos = [];
		for(let i = 0; i < todos.length; i++){
			// eslint-disable-next-line
			if(i == e.target.id){
				continue;
			}
			newTodos.push(todos[i]);
		}
		setTodos(newTodos);
		localStorage.setItem("todos", JSON.stringify(newTodos));
	}
	const todoList = todos.map((todo, idx) => <Todo title={todo} onDelete={onTodoDelete} id={idx}/>)
	return(
		<div className="container">
			<h1>Todo list</h1>
			<hr/>
			<TodoInput onInputChange={onTextChange} inputVal={todo} onSubmit={onButtonClick}/>
			{todoList.length === 0 ? <h1>Don't stop, Add more!</h1> : todoList}
		</div>
	)
}
