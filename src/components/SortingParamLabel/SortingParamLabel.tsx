import React from 'react';
import { TSortingParam } from '../../types';
import styles from './SortingParamLabel.module.scss';

export const SortingParamLabel = ({ children, txt, className, labelClassName }: TSortingParam) => {
	return (
		<div className={styles.label + ' ' + className}>
			<p className={styles.label_text + ' ' + labelClassName}>{txt}</p>
			{children}
		</div>
	)
}
