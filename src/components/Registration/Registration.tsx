import { Link, useNavigate } from 'react-router-dom';
import { AlertIcon, LockerIcon, MailIcon, UserIcon } from '../icons';
import styles from './Registration.module.scss';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { ModalAuth } from '../Modals/ModalAuth';
import { registration } from '../../app/features/auth/authSlice';

const schema = yup.object().shape({
	login: yup.string().required('Name is requared').min(4, 'Three characters minimum'),
	email: yup.string().email().required(),
	password: yup.string().required().min(8, 'too short'),
	confirmPswrd: yup.string().required().oneOf([yup.ref('password')], 'Passwords does not match'),
})

export const Registration = () => {
	const [isOpen, setIsOpen] = useState(false);
	const dispatch = useDispatch();
	const { userData, isLogged } = useSelector(state => state.auth)
	const navigate = useNavigate();
	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(schema),
		shouldUseNativeValidation: true,
	});

	const onSubmit = ({ login, password, confirmPswrd, email }) => {
		dispatch(registration({ login, password, email }));
		setIsOpen(true);
	}
	const closeModal = () => {
		setIsOpen(false);
		navigate('/log/auth');
	}

	if (isLogged) {
		return (
			<article className='auth-card'>
				<div className="auth-card__body">
					<h3 className="auth-card__title">Ты уже вошел, дурашка с:</h3>
					<button
						className="auth-card__button"
						onClick={(e) => navigate(-1)}
					>Назад</button>
				</div>
			</article>
		)
	}

	return (
		<>
			{isOpen && <ModalAuth onClick={closeModal} />}
			{!isOpen &&
				<article className='auth-card'>
					<div className="auth-card__body">
						<h3 className={'auth-card__title' + ' ' + styles.title}>Регистрация</h3>
						<form
							className={"auth-card__form" + ' ' + styles.form}
							onSubmit={handleSubmit(onSubmit)}
						>
							<label className='auth-card__input-container styledInput'>
								<UserIcon className='styledInput__icon' />
								<input {...register('login')} type="text" placeholder='Логин' />
								<AlertIcon className='styledInput__alert' />
							</label>
							<label className='auth-card__input-container styledInput'>
								<MailIcon className='styledInput__icon' />
								<input {...register('email')} type="email" placeholder='Электронная почта' />
								<AlertIcon className='styledInput__alert' />
							</label>
							<label className='auth-card__input-container styledInput'>
								<LockerIcon className='styledInput__icon' />
								<input {...register('password')} type="password" placeholder='Пароль' />
							</label>
							<label className='auth-card__input-container styledInput'>
								<LockerIcon className='styledInput__icon' />
								<input {...register('confirmPswrd')} type="password" placeholder='Повторите пароль' />
							</label>
							{!!Object.keys(errors).length &&
								<div className={'auth-card__button auth-card__error' + ' ' + styles.button}>
									Ошибка ввода
									<AlertIcon className={'auth-card__error-icon'} />
								</div>
							}
							<button className={'auth-card__button' + ' ' + styles.button} type='submit'>Зарегистрироваться</button>
						</form>
					</div>
					<div className="auth-card__rules auth-card__grey-txt">
						<h3 className="auth-card__small-title">Пользователь обязуется:</h3>
						<ul className="auth-card__list">
							<li className="auth-card__list-item">предоставлять достоверную и актуальную информацию при регистрации и добавлении объекта;</li>
							<li className="auth-card__list-item">добавлять фотографии объектов соответствующие действительности. Администрация сайта sdaem.by оставляет за собой право удалять любую информацию, размещенную пользователем, если сочтет, что информация не соответствует действительности, носит оскорбительный характер, нарушает права и законные интересы других граждан либо действующее законодательство Республики Беларусь.</li>
						</ul>
						<p className="auth-card__grey-txt">
							Уже есть аккаунта? <Link to='/log/auth' className='auth-card__link'>Войдите</Link>
						</p>
					</div>
				</article>
			}
		</>
	)
}
