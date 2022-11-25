import React from 'react';
import styles from './Card.module.scss';
import { Link, useParams } from 'react-router-dom';
import apartment from '../../assets/home.jpg';
import { TCard } from '../../types';


const Card = (props: TCard) => {
	return (
		<div className={styles.card}>
			<img src={props.img} className={styles.img} alt="oicture of apartment" />
			<div className={styles.card_body}>
				<h6 className={styles.title}>{props.title}</h6>
				<p className={styles.text}>{props.text}</p>
			</div>
			<div className={styles.card_footer}>
				<div className={styles.date}>
					{props.date}
				</div>
				<a href="" className={styles.link}>
					Читать
				</a>
			</div>
		</div>
	)
}

export default Card