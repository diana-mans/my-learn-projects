import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoItem from './todo-item';

// React-компонент (функциональный)
const root = ReactDOM.createRoot(
  document.getElementById('app')
);

//React-компонент (class-based)
class TodoApp extends React.Component {
	constructor() {
		super(); //конструктор из React.component

		//Исходное состояние приложения
		this.state = {
			todos: [
				{ name: 'Настроить webpack', checked: true },
				{ name: 'Запустить webpack-dev-server', checked: true },
				{ name: 'Написать TodoApp', checked: false }
			],
			newTodoText: ''
		};
	}

	toggleTodo(key) {
		const todos = this.state.todos.map((todo, i) => {
			if (key === i) {
				return {
					name: todo.name,
					checked: !todo.checked
				}
			} else {
				return todo;
			}
		});

		//Обновляем состояние приложения
		this.setState({ todos });
	}

	addTodo() {
		const todos = this.state.todos;
		todos.push({
			name: this.state.newTodoText, 
			checked: false
		});

		this.setState({
			todos,
			newTodoText: ''
		});
	}

	render() {
		//JSX-syntax
		return (
			<div>
				<ol>
					{
						this.state.todos.map((todo, i) => {
							return (
								<TodoItem
									key={i}
									name={todo.name}
									checked={todo.checked}
									toggleTodo={this.toggleTodo.bind(this, i)}
								 />
							);
						})
					}
				</ol>

				<input 
					type="text" 
					placeholder="Новая задача"
					value={this.state.newTodoText}
					onChange={ev => {
						this.setState({ newTodoText: ev.target.value });
					}}
					onKeyUp={ev => {
						if (ev.keyCode === 13) {
							this.addTodo();
						}
					}}
				 />

			 </div>
		);
	}
}

root.render(
	<TodoApp />,
);

