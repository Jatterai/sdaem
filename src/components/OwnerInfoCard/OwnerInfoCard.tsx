import { TOwnerCard } from "../../types";
import { MailIcon, ViberIcon, WhatsappIcon } from "../icons";
import styles from './OwnerInfoCard.module.scss';


export const OwnerInfoCard = ({ owner, isOpen, setIsOpen }: TOwnerCard) => {
	return (
		<div className={styles.owner} onMouseLeave={() => setIsOpen(false)}>
			<div className={styles.avatar}>
				<img src={owner.img} alt="avatar" />
			</div>
			<p className={styles.p}>Владелец</p>
			<p className={styles.name}>{owner.name}</p>
			<p className={styles.phone}>{owner.phoneNumber}</p>
			<a href="https://google.com" target='_blank' className={styles.link}>{owner.links.website}</a>
			<div className={styles.media}>
				<a
					href="https://www.viber.com/ru/"
					className={`${styles.media__item} ${styles.viber}`}
					target='_blank'
				>
					<ViberIcon />
				</a>
				<a
					href="https://www.whatsapp.com/?lang=ru"
					className={`${styles.media__item} ${styles.whatsapp}`}
					target='_blank'
				>
					<WhatsappIcon />
				</a>
				<a
					href="https:/mail.com"
					className={`${styles.media__item} ${styles.mail}`}
					target='_blank'
				>
					<MailIcon />
				</a>
			</div>
		</div>
	)
}
