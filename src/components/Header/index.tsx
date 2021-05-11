import styles from './styles.module.scss'
import TalkToUsButton from '../TalkToUsButton/index'

export default function Header() {
    return(
       <>
       <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
            <img src="rocketlogo.svg" alt="logo" />
                <nav>
                      <a >Home</a>
                   
                      <a>Posts</a>
                </nav>
                <TalkToUsButton />

            </div>
        </header>
       </>
    )
}