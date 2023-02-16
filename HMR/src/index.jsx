import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import Header from './Header.jsx';

const root = ReactDOM.createRoot(
	document.getElementById("root")
);

window.addEventListener('load', () => {
	root.render(<Header />)
})