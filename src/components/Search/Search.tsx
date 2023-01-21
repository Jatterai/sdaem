import styles from './Search.module.scss';
import { TSearch } from '../../types';
import { Form } from 'react-router-dom';

export const Search = (props: TSearch) => {
	return (
		<Form
			action='/news'
			method='get'
			className={styles.container + (props.className ? ` ${props.className}` : '')}
		>
			<input
				className={styles.input}
				value={props.value}
				onChange={props.onChange}
				name='q'
				type="text"
				placeholder={props.placeholder || ''}
			/>
			<button
				className={styles.btn}
				disabled={(props.submitting === 'loading')}
			><i className='_icon-search'></i>
			</button>
		</Form>
	)
}
