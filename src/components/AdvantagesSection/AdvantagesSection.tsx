import { Link } from 'react-router-dom';
import { Container } from '../Container/Container';
import { ArrowRightIcon, PinIcon } from '../icons';
import styles from './AdvantagesSection.module.scss';
import hand from '../../assets/icons/rulerHand.svg';
import stack from '../../assets/icons/onTop.svg';

export const AdvantagesSection = () => {
	return (
		<section className={styles.section + ' bg-with-map'}>
			<Container className={styles.container}>
				<div className={styles.info}>
					<h3 className={styles.title}>Поиск квартир на карте</h3>
					<p className={styles.description}>Ищите квартиры на сутки в центре города, возле парка или в живописном районе</p>
					<Link to='' className={styles.openMap}><PinIcon /><span>Открыть карту</span></Link>
				</div>
				<div className={styles.cards}>
					<div className={styles.regular_card}>
						<div className={styles.header}>
							<div className={styles.icon}>
								<img src={hand} alt="" />
							</div>
							<h6 className={styles.title}>
								Начните привлекать
								клиентов бесплатно!
							</h6>
						</div>
						<p className={styles.text}>
							Пройдя простую регистрацию на сайте у Вас появится личный кабинет, в котором возможно <span>бесплатно создавать и публиковать</span> объявления на сайте.
						</p>
						<Link className={styles.button} to=''>+  Разместить объявление</Link>
					</div>
					<div className={styles.regular_card}>
						<div className={styles.header}>
							<div className={styles.icon}>
								<img src={stack} alt="" />
							</div>
							<h6 className={styles.title}>
								Поднимайте
								объявления
							</h6>
						</div>
						<p className={styles.text}>
							Вы в любое время можете <span>поднимать </span>объявления <span>вверх первой страницы</span> каталога,
							они разместятся сразу после платных объявлений до тех пор, пока другой пользователь не повторит процедуру.
						</p>
						<Link className={styles.button} to=''>Узнать стоимость услуги <ArrowRightIcon /></Link>
					</div>
					<div className={styles.golden_card}>
						<h6 className={styles.title}>Приоритет Gold</h6>
						<p className={styles.text}>
							Приоритетное размещение <span>Gold</span> позволяет <span>закрепить ваше объявление</span> в верхней части каталога!
						</p>
						<p className={styles.text}>
							Gold объявления <span>перемещаются
								каждые 5 мин</span> на 1 позицию, что делает размещение одинаковым для всех.
						</p>
						<Link to='' className={styles.button}>
							<span>Ещё о тарифе Gold</span>
							<ArrowRightIcon />
						</Link>
					</div>
				</div>
			</Container>
		</section>
	)
}
