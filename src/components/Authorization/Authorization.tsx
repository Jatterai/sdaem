import { Link } from 'react-router-dom';
import { AlertIcon, LockerIcon, UserIcon } from '../icons';
import styles from './Authorization.module.scss';

export const Authorization = () => {
	return (
		<article className='auth-card'>
			<div className="auth-card__body">
				<h3 className='auth-card__title'>Авторизация</h3>
				<p className="auth-card__grey-txt">
					Авторизируйтесь, чтобы начать<br />
					публиковать свои объявления
				</p>
				<form className="auth-card__form">
					<label className='auth-card__input-container styledInput'>
						<UserIcon className='styledInput__icon' />
						<input type="text" placeholder='Логин' />
						<AlertIcon className='styledInput__alert' />
					</label>
					<label className='auth-card__input-container styledInput'>
						<LockerIcon className='styledInput__icon' />
						<input type="password" placeholder='Пароль' />
					</label>
					<div className='auth-card__add-cont'>
						<label className="auth-card__checkbox-container checkbox">
							<input type="checkbox" className='checkbox__input' />
							<div className="checkbox__slider" />
							<span className='checkbox__label'>Запомнить меня</span>
						</label>
						<a href="#" className='auth-card__link'>Забыли пароль?</a>
					</div>
					<button className='auth-card__button' type='submit'>Войти</button>

				</form>
				<p className='auth-card__grey-text'>
					Еще нет аккаунта? <Link to='/log/reg' className='auth-card__link'>Создайте аккаунт</Link>
				</p>
			</div>
		</article>
	)
}
