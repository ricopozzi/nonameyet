import Head from 'next/head'
import Image from 'next/image'
import styles from './styles.module.scss'
import { CgWebsite } from 'react-icons/cg'
import { GrTechnology } from 'react-icons/gr'
import { FaRegHandshake } from 'react-icons/fa'

export default function Home() {
  return (
    <>
      <Head>
       <title>Home | no name yet</title>
     </Head>
     <main className={styles.mainContainer}>
       <section className={styles.sectionMainContainer} >
  
           <h1>Soluções para <span>infoproduto</span>, integrações, etc.</h1>
           <p>
             Entre em contato conosco para mais informações <br />
             {/* <span></span> */}
           </p>
         
       </section>
       <img src="rocket.svg" alt="baloon" />
     </main> 
     <section className={styles.vantagensSection}>
       <div className={styles.vantagensSectionContainer}>
          <div className={styles.vantagensTextContainer}>
              <h1>Vantagens </h1>
              <p>Serviços que a No name yet te oferece para turbinar seu negócio online</p>
          </div>
          <div className={styles.vantagensContainer}>
          <div className={styles.vantagens}>
            <CgWebsite size={29}/>
            <div className={styles.vantagensTitle}>
              Landing pages
            </div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nibh volutpat, vestibulum tellus ornare, luctus sapien. 
            </p>
          </div>
          <div className={styles.vantagens}>
            <GrTechnology  size={29}/>
            <div className={styles.vantagensTitle}>
              Integrações
            </div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nibh volutpat, vestibulum tellus ornare, luctus sapien. 
            </p>
          </div>
          <div className={styles.vantagens}>
            <FaRegHandshake size={29}/>
            <div className={styles.vantagensTitle}>
              Suporte
            </div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nibh volutpat, vestibulum tellus ornare, luctus sapien. 
            </p>
          </div>
       </div>
       </div>
      
     </section>
     
    </>  
   )
 }

