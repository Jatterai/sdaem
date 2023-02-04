import styles from './MoreOptions.module.scss';
import { OptionsIcon } from '../icons';

export const MoreOptionsButton = ({ setIsOpen, className, isOpen }: { setIsOpen: () => void, className?: string, isOpen: boolean }) => {
	return (
		<button
			type='button'
			onClick={setIsOpen}
			className={styles.more_options_button + ' ' + className + ' ' + (isOpen ? styles.opened : '')}
		>
			<span>Больше опций</span> <OptionsIcon className={styles.icon} />
		</button>
	)
}
