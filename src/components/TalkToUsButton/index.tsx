import { GetServerSideProps } from 'next'
import styles from './styles.module.scss'
import React, { HTMLAttributes, ReactElement, ReactHTMLElement} from 'react'


export default function TalkToUsButton({...props}) {
    return (
        <>
            <button className={styles.loginButton} {...props}>
                Fale conosco
            </button>
        </>
    )
}

