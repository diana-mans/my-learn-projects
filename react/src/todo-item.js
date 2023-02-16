import React from 'react';

//Функциональный компонент, которому не нужен state, только props
const TodoItem = (props) => {
	console.log(props);
	const className = props.checked ? 'checked' : '';
	return (
		<li 
			className={className} 
			onClick={props.toggleTodo}
		>
			{props.name}
		</li>
	);
}

export default TodoItem;