import styles from './styles.module.scss'

export default function Footer() {
    return(
        <footer className={styles.footerMain}>
            <div className={styles.rightsContainer}>
                <div className={styles.rights}>
                    <p>
                    All rights reserved for  ©️ No name yet
                    </p>    
                </div>
            </div>

            <div className={styles.linksContainer}>
                <div className={styles.links}>
                    <a href="https://www.facebook.com/ricopozzi/">
                        Facebook
                    </a>
                    <a href="https://www.github.com/ricopozzi">
                        Github
                    </a>
                </div>
            </div>
            <div className={styles.contactContainer}>
                <div className={styles.contact}>
                    <a href="#">
                        Contact us
                    </a>
                    <p>
                        (xx) xxxxx-xxxx
                    </p>
                </div>
            </div>
        </footer>
    )
}