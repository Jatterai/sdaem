import React from 'react';
import styles from './Breadcrumps.module.scss';

const Breadcrumps = (props: { className: string }) => {
	return (
		<div className={styles.container + (props.className ? ` ${props.className}` : '')}>
			<p className={styles.from}>
				<i className='_icon-home' />
				<span>•</span>
			</p>
			<ul className={styles.to}>
				<li>Новости</li>
			</ul>
		</div>
	)
}

export default Breadcrumps