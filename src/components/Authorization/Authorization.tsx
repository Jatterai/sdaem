import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AlertIcon, LockerIcon, UserIcon } from '../icons';
import { logIn } from '../../app/features/auth/authSlice';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

export const Authorization = () => {
	const dispatch = useDispatch();
	const {
		userData,
		isLogged
	} = useSelector(state => state.auth);
	const navigate = useNavigate();
	const schema = yup.object().shape({
		login: yup.string().matches(new RegExp(userData.login), 'Пользователь не найден. Возможно, вы не зарегистрированы').required('Name is requared').min(4, 'Three characters minimum'),
		password: yup.string().matches(new RegExp(userData.password), 'Неверный пароль').required(),
		remember: yup.bool(),
	})
	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(schema),
		shouldUseNativeValidation: true,
	});

	const noRegistration = (e) => { e.preventDefault(); alert(`Сначала "зарегистрируйся" с:`) }

	const onSubmit = ({ login, password, remember }) => {
		const data = { login, password }
		dispatch(logIn({ data, remember }));
		navigate('/')
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
		<article className='auth-card'>
			<div className="auth-card__body">
				<h3 className='auth-card__title'>Авторизация</h3>
				<p className="auth-card__grey-txt">
					Авторизируйтесь, чтобы начать<br />
					публиковать свои объявления
				</p>
				<form
					className="auth-card__form"
					onSubmit={userData.login ? handleSubmit(onSubmit) : noRegistration}
				>
					<label className='auth-card__input-container styledInput'>
						<UserIcon className='styledInput__icon' />
						<input
							type="text"
							placeholder='Логин'
							defaultValue={userData.login || ''}
							{...register('login')}
						/>
						<AlertIcon className='styledInput__alert' />
					</label>
					<label className='auth-card__input-container styledInput'>
						<LockerIcon className='styledInput__icon' />
						<input
							type="password"
							placeholder='Пароль'
							{...register('password')}
						/>
						<AlertIcon className='styledInput__alert' />
					</label>
					<div className='auth-card__add-cont'>
						<label className="auth-card__checkbox-container checkbox">
							<input type="checkbox" className='checkbox__input' {...register('remember')} />
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