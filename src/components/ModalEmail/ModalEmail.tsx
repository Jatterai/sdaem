import styles from './ModalEmail.module.scss';
import { TModalProps } from '../../types';



export const ModalEmail = ({ onClick }: TModalProps) => {
	return (
		<section className={`${styles.modal} modal`}>
			<div className={styles.container}>
				<div className={styles.message}>
					<h3 className={styles.title}>
						Ваше письмо	отправлено!
					</h3>
					<p>Какое-то сообщение о том, что письмо отправлено, какое-то сообщение, что письмо отправлено.</p>
					<button className={styles.button} onClick={onClick}>Закрыть окно</button>
				</div>
			</div>

		</section>
	)
}
