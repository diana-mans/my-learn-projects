import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import Header from '../shared/Header.jsx';
import { hydrateRoot } from 'react-dom/client';

const container = document.getElementById('react_root');

window.addEventListener('load', () => {
	const root = hydrateRoot(container, <Header />);
})

