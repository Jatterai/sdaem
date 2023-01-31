import styles from './Checkbox.module.scss';

export const Checkbox = ({ value, name, label, ...props }) => {
	return (
		<label className={styles.checkbox}>
			<input className={styles.input} name={name} value={value} type={'checkbox'} />
			<div className={styles.box}></div>
			<span>{label}</span>
		</label>
	)
}
