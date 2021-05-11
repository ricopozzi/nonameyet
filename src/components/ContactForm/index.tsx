import styles from './styles.module.scss'

export default function ContactForm() {
    return (
        <form className={styles.formClass} action="">
            <div>Nome:</div>
            <input className={styles.nameInput} type="text" />
            <div>Email:</div>
            <input className={styles.emailInput} type="text" />
            <div>Email:</div>
            <input className={styles.emailInput} type="text" />
        </form>
    )
}