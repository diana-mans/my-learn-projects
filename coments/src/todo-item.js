import React from 'react';

//Функциональный компонент, которому не нужен state, только props
const ComentItem = (props) => {
	return (
		<div>
			{props.userName}&nbsp;
			<i>{props.date}</i>&nbsp;&nbsp;
			<b>{props.userComent}</b>
			<button onClick={props.deleteComent} className={'delete'}></button>
			<button onClick={props.changeComent} className={'change'}></button>
		</div>
	);
}

export default ComentItem;