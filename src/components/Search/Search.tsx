import React from 'react';
import styles from './Search.module.scss';
import { TSearch } from '../../types';

const Search = (props: TSearch) => {
	return (
		<div className={styles.container + (props.className ? ` ${props.className}` : '')}>
			<input
				className={styles.input}
				type="text"
				placeholder={props.placeholder}
			/>
			<button className={styles.btn}><i className='_icon-search'></i></button>
		</div>
	)
}

export default Search