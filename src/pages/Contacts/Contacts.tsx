import { Container, ModalEmail } from '../../components';
import { AlertIcon, ClockIcon, MailIcon, TelegramIcon, UserIcon } from '../../components/icons';
import styles from './Contacts.module.scss';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const schema = yup.object().shape({
	name: yup.string().matches(/[a-zа-я]+\d*/i).min(2, 'Слишком короткое имя').max(20, 'Имя слишком длинное').required(),
	email: yup.string().email().required(),
	message: yup.string().min(20).required(),
});

export const Contacts = () => {
	const [isOpen, setIsOpen] = useState(false);
	const onSubmit = () => {
		setIsOpen(true);
		resetField('message')
	};
	const closeModal = () => setIsOpen(false);
	const { register, handleSubmit, formState: { errors }, resetField } = useForm({
		resolver: yupResolver(schema),
		shouldUseNativeValidation: true,
		defaultValues: {
			message: ""
		}
	});

	return (
		<>
			{isOpen && <ModalEmail onClick={closeModal} />}
			<section className={`${styles.contacts} bg-with-map`}>
				<Container className={styles.container}>
					<div className={styles.info}>
						<h2 className={styles.title}>Контакты</h2>
						<p className={styles.description}>Если у Вас есть пожелания, предложения или претензии по организации работы сайта мы всегда рады услышать Ваше мнение.</p>
						<ul className={styles.contacts__row}>
							<li className={styles.contacts__item}>
								<i className='_icon-loc'></i>
								<span>220068, РБ, г. Минск, ул. Осипенко, 21, кв.23</span>
							</li>
							<li className={styles.contacts__item}>
								<i className='_icon-phone'></i>
								<span>+375 29 621-48-33</span>
								<div className={styles.circles}>
									<a href=""><i className='_icon-vb'></i></a>
									<a href=""> <i><TelegramIcon /></i> </a>
									<a href=""><i className='_icon-wa'></i></a>
								</div>
							</li>
							<li className={styles.contacts__item}>
								<i className='_icon-mail'></i>
								<a href="mailto:maiorova.yuna@gmail.com">sdaem@sdaem.by</a>
							</li>
							<li className={styles.contacts__item}>
								<i><ClockIcon /></i>
								<span><span className={styles.thin}>Режим работы: </span>08:00-22:00</span>
							</li>
						</ul>
						<p className={styles.ip}>ИП Шушкевич Андрей Викторович<br /> УНП 192602485 Минским горисполкомом 10.02.2016</p>
						<div className={styles.alert}>
							<AlertIcon />
							<p>Администрация сайта не владеет информацией
								о наличии свободных квартир</p>
						</div>
					</div>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className={styles.form}
					>
						<div className={styles.inputs}>
							<label>
								<span>Ваше имя</span>
								<div className={styles.input_container}>
									<UserIcon />
									<input
										{...register('name')}

										placeholder='Введите'
									/>
								</div>
							</label>
							<label>
								<span>Ваша электронная почта</span>
								<div className={styles.input_container}>
									<MailIcon />
									<input
										{...register('email')}
										placeholder='Введите'
									/>
								</div>
							</label>
						</div>
						<label>
							<span>Ваше сообщение</span>
							<textarea
								{...register('message')}
								placeholder='Сообщение'
							/>
						</label>
						<button>Отправить</button>
					</form>
					<div className={styles.social_media} >
						<a href="http://instagram.com"><i className='_icon-inst'></i></a>
						<a href="http://vk.com"><i className='_icon-vk'></i></a>
						<a href="http://facebook.com"><i className='_icon-fb'></i></a>
					</div>
				</Container>
			</section>
		</>
	)
}
