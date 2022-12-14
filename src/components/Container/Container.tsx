import React from 'react';
import styles from './Container.module.scss';

interface –°ontainerProps {
	className?: string,
	children: React.ReactNode
}


const Container = (props: –°ontainerProps) => {
	return (
		<div className={`${styles.container} ${props.className}`}>
			{props.children}
		</div>
	)
}

export default Container