import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Breadcrumps.module.scss';
import { TBreadcrumbProps } from '../../types';



const Breadcrumps = ({ className, links }: TBreadcrumbProps) => {
	const linksElements = links.map(
		el => !el.current ?
			<li>
				<Link className={styles.link} to={el.link}>{el.name}</Link>
			</li> :
			<li className={styles.current}>{el.name}</li>)
	return (
		<div className={styles.container + (className ? ` ${className}` : '')}>
			<p className={styles.from}>
				<NavLink to='/'><i className='_icon-home' /></NavLink>
				<span>•</span>
			</p>
			<ul className={styles.to}>
				{linksElements}
			</ul>
		</div>
	)
}

export default Breadcrumps