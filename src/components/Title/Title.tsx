import React from 'react';
import styles from './Title.module.scss';
import { TTitle } from '../../types';


const Title = (props: TTitle) => {
	return (
		<h1 className={styles.title + (props.addClass ? ` ${props.addClass}` : '')}>
			{props.children}
		</h1>
	)
}

export default Title