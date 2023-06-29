import React from 'react';

function TodoInput({ onInputChange, onSubmit, inputVal }){
	return(
		<div className="todo-input">
			<input value={inputVal} onChange={onInputChange} placeholder={"What's next?"}/>
			<button onClick={onSubmit}>Add Todo</button>
		</div>
	)
}
export default TodoInput;
