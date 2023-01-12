import React from 'react';
import styles from './Container.module.scss';

interface СontainerProps {
	className?: string,
	children: React.ReactNode
}


export const Container = (props: СontainerProps) => {
	return (
		<div className={`${styles.container} ${props.className}`}>
			{props.children}
		</div>
	)
}
