import React from 'react';
import styles from './Search.module.scss';
import { TSearch } from '../../types';

const Search = (props: TSearch) => {
	return (
		<form
			className={styles.container + (props.className ? ` ${props.className}` : '')}
			onSubmit={props.handleSubmit}
		>
			<input
				className={styles.input}
				type="text"
				placeholder={props.placeholder || ''}
				value={props.searchInputValue}
				onChange={props.handleChange}
			/>
			<button className={styles.btn}><i className='_icon-search'></i></button>
		</form>
	)
}

export default Search