import styles from './styles.module.scss'
import TalkToUsButton from '../TalkToUsButton/index'
import { useState } from 'react'

export default function Header() {
    const [visible, setVisible] = useState(true) 
    
    const toggleVisible = () => { 
      const scrolled = document.documentElement.scrollTop; 
      if (scrolled > 0){ 
        setVisible(false) 
      }  
      else if (scrolled <= 0){ 
        setVisible(true) 
      } 
    }; 
      
    const scrollToBottom = () =>{ 
      window.scrollTo({ 
        top: document.documentElement.scrollHeight, 
        behavior: 'smooth'
        /* you can also use 'auto' behaviour 
           in place of 'smooth' */
      }); 
    }; 
      
    // window.addEventListener('scroll', toggleVisible);

    return(
       <>
       <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
            <img src="rocketlogo.svg" alt="logo" />
                <nav>
                      <a >Home</a>
                   
                      <a>Posts</a>
                </nav>
                <TalkToUsButton onClick={scrollToBottom} />

            </div>
        </header>
       </>
    )
}