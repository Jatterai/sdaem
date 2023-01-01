import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './scss/null.scss';
import './index.scss';
import './assets/fonts/style.css';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
