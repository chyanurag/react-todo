function Todo({ id, title, onDelete }){
	return(
		<>
			<div className="todo" id="todo-{id}">
				<h3>{ title }</h3><i class="fa fa-thin fa-trash" onClick={onDelete} id={id}></i>
			</div>
		</>
	)
}
export default Todo;
