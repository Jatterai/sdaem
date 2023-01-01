import React from 'react';
import styles from './Card.module.scss';
import { Link, useParams } from 'react-router-dom';
import apartment from '../../assets/home.jpg';
import { TCard } from '../../types';


const Card = (props: TCard) => {
	return (
		<div className={styles.card}>
			<Link to={`/news/${props.id}`} className={styles.picture_wrapper}>
				<img src={props.img} className={styles.img} alt="oicture of apartment" />
			</Link>

			<div className={styles.card_body}>
				<Link to={`/news/${props.id}`} className={styles.title}>{props.title}</Link>
				<p className={styles.text}>{props.text}</p>
			</div>
			<div className={styles.card_footer}>
				<div className={styles.date}>
					{props.date}
				</div>
				<Link to={`/news/${props.id}`} className={styles.link}>
					Читать
				</Link>
			</div>
		</div>
	)
}

export default Card