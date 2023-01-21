import { useDispatch } from "react-redux";
import { toggleFavorite } from "../../app/features/catalog/catalogSlice";
import { TCardProps } from "../../types";
import { MetroIcon, PhoneIcon, PinIcon, StarIcon, UserIcon } from "../icons";
import { OwnerInfoCard } from "../OwnerInfoCard/OwnerInfoCard";
import styles from './ApartmentCard.module.scss'
import React, { useRef, useState } from "react";

export const ApartmentCard = ({ item, className }: TCardProps) => {
	const dispatch = useDispatch();
	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef();

	const handleClick = (e: React.MouseEvent<HTMLElement>) => {
		if ((e.target as HTMLElement).closest('#contacts') !== ref.current) {
			setIsOpen(false);
		} else {
			setIsOpen(pr => !pr);
		}
	}

	return (
		<article className={`${styles.card} ${className}`} onClick={handleClick} onMouseLeave={() => setIsOpen(false)}>
			<div className={styles.images}>
				<img src={item.img} alt="apartment" className={styles.img} />
			</div>
			<div className={styles.info}>
				<div className={styles.main}>
					<div className={styles.price}>
						<p className={styles.num}>{item.price.toFixed(2)} BYN</p>
						<p className={styles.period}>за сутки</p>
					</div>
					<p className={styles.bedrooms + ' ' + styles.block}>
						<UserIcon className={styles.icon} />
						<span>{item.bedroomCount} (1+1)</span>
					</p>
					<p className={styles.rooms + ' ' + styles.block}> {item.roomsCount} комн.</p>
				</div>
				<div className={styles.adress}>
					<p className={styles.onMap + ' ' + styles.item}>
						<PinIcon className={styles.icon} />
						<span>{item.adress.city}, {item.adress.street}, д. {item.adress.number}</span>
					</p>
					<p className={styles.tags}>
						<span className={styles.subway + ' ' + styles.item}>
							<MetroIcon className={styles.icon} />
							<span>{item.adress.subway}</span>
						</span>
						<span className={styles.district + ' ' + styles.item}>
							{item.adress.district}
						</span>
					</p>
				</div>
				<p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores laudantium magni totam saepe eligendi dignissimos deleniti unde, mollitia fugiat qui nam at temporibus vero consequatur optio adipisci soluta nesciunt, in, ex tempore placeat provident rem alias magnam. Natus, soluta. Vel eaque officiis accusamus, deserunt tempore praesentium rem quis impedit nemo porro iste cupiditate dolores assumenda corporis consequuntur fugit id. Illum rem officia nulla voluptate ipsa dolor eos fuga itaque quibusdam, ullam quasi officiis autem iste ipsum veniam recusandae neque natus nisi, reiciendis impedit facilis assumenda ducimus quo? Molestias, quia impedit! Autem id soluta ex nostrum cum debitis eaque, magnam eius!</p>
				<div className={styles.footer}>
					<div
						className={styles.favorite + (item.isFavorite ? ' ' + styles.on : '')}
						onClick={() => dispatch(toggleFavorite(item.id))}
					>
						<StarIcon className={styles.icon} />
					</div>
					<div className={styles.contacts} id='contacts' ref={ref}>
						<PhoneIcon className={styles.icon} />
						<span>Контакты</span>
						{
							isOpen &&
							<OwnerInfoCard owner={item.owner} isOpen={isOpen} setIsOpen={setIsOpen} />
						}
					</div>
					<a className={styles.more}>
						Подробнее
					</a>
				</div>
			</div>
		</article >
	)
}
