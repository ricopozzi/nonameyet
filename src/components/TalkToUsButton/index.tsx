import { GetServerSideProps } from 'next'
import styles from './styles.module.scss'

export default function TalkToUsButton() {
    return (
        <>
            <button className={styles.loginButton}>
                Fale conosco
            </button>
        </>
    )
}

