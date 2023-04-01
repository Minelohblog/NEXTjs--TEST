import META from '../components/meta'
import TOP from '../components/header'
import Footer from '../components/footer';
import About from '../components/About'
import Image from "next/image";
import Card from '/components/card'
import Button from '/components/button'
import styles from '/styles/index.module.css'
import Link from 'next/link';
import CardData from '../data.json'

import { Inter } from '@next/font/google';

export default function Home() {
  const test ="te"
  
  return (
    <>
      <META></META>
      <TOP></TOP>
      <main>
        
        <div className={styles.screenimg}>
          <div className={styles.image}>
            <Image 
              src="/images/test.png" // Route of the image file
              layout="fill" objectFit="contain"
              alt="icon"
            />
          </div>
        </div>
      <About/>
      <Button link="/posts/aboutme"/>
      <div className={"portfolio"}>
        <div class="container">
          <h1>port<br/>　folio</h1>
          <h3>制作物紹介</h3>
            <div className={"cardBlock"}>
            {CardData.cardLists.map((val, index) => 
              <Card  key={index} image={val.image} title={val.title} tag={val.tag} information={val.information} pagedata={val.pagedata}/>
            )}    
            </div>
        </div>
        <Button link="/posts/test"/>
      </div>
      <div className={styles.contact}>
        <div className={"container"}>
        <h1>contact</h1>
        <div className={styles.contactBlock}>
          <h3 className={styles.aa}>ご連絡、ご相談あればこちらで承ります</h3>
          
          <div className={styles.button}>
            <div className={styles.button_line004}>
              <Link href="/posts/test" className={styles.LinkText}>Yonetaku.sit@gmail.com</Link>
            </div>
          </div>
          </div>
        </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}
