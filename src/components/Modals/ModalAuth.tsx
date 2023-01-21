import { TModalProps } from '../../types';
import styles from './Modal.module.scss';

export const ModalAuth = ({ onClick }: TModalProps) => {
	return (
		<section className={`${styles.modal} modal`}>
			<div className={styles.container}>
				<div className={styles.message}>
					<h3 className={styles.title}>
						Подтвердите<br />регистрацию
					</h3>
					<p>Письмо для подтверждения аккаунта отправлено почту. Перейдите по ссылке, указанной в письме. Если письма нет, то проверьте спам.</p>
					<button className={styles.button} onClick={onClick}>Понятно</button>
				</div>
			</div>

		</section>
	)
}
