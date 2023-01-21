import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './scss/null.scss';
import './index.scss';
import './assets/fonts/style.css';
import { Provider } from 'react-redux';
import { store } from './app/store'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
)
