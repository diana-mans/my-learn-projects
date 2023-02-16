import React from 'react';
import ReactDOM from 'react-dom/client';
import ComentItem from './todo-item';

// React-компонент (функциональный)
const root = ReactDOM.createRoot(
  document.getElementById('app')
);

//React-компонент (class-based)
class ComentApp extends React.Component {
	constructor() {
		super(); //конструктор из React.component

		//Исходное состояние приложения
		if (localStorage.getItem('state')) {
			this.state = JSON.parse(localStorage.getItem('state'))
		} else {
			this.state = {
				coments: [],
				newUserComent: ''
			};
		}
	}

	saveResults(props) {
		const coments = props;
		this.setState({
			coments,
			newUserComent: ''
		});

		window.localStorage.setItem('state', JSON.stringify({
			coments,
			newUserComent: ''
		}));
	}

	addComent() {
		const coments = this.state.coments;
		const currentDate = new Date();
		const comentDate = currentDate.getDate() + '.' + (currentDate.getMonth() + 1) + '.' + currentDate.getFullYear() + ' ' + currentDate.getHours() + ':' + currentDate.getMinutes();
		coments.push({
			userName: prompt('Введите ваше имя'),
			date: comentDate,
			userComent: this.state.newUserComent,
		});
		this.saveResults(coments);
	}

	deleteComent(key) {
		const coments = this.state.coments;
		coments.splice(key, 1);
		this.saveResults(coments);
	}

	changeComent(key) {
		const coments = this.state.coments.map((coment, i) => {
			if (key === i) {
				return {
					userName: coment.userName,
					date: coment.date,
					userComent: prompt('Изменить комментарий на:')
				}
			} else {
				return coment;
			}
		});
		this.saveResults(coments);
	}

	render() {
		//JSX-syntax
		return (
			<div>
				<div>
					{
						this.state.coments.map((coment, i) => {
							return (
								<ComentItem
									key={i}
									userName={coment.userName}
									date={coment.date}
									userComent={coment.userComent}
									deleteComent={this.deleteComent.bind(this, i)}
									changeComent={this.changeComent.bind(this, i)}
								 />
							);
						})
					}
				</div>

				<input 
					type="text" 
					placeholder="Оставить комментарий"
					value={this.state.newUserComent}
					onChange={ev => {
						this.setState({ newUserComent: ev.target.value });
					}}
					onKeyUp={ev => {
						if (ev.keyCode === 13) {
							this.addComent();
						}
					}}
				 />

			 </div>
		);
	}
}

root.render(
	<ComentApp />,
);

