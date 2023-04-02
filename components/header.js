import Link from "next/link";
import styles from '/styles/header.module.css'
import Image from "next/image";
import { useState } from "react";

const  Header  = ({ children })=>  {
  
  const [active, setActive] =  useState(false);

  const useclassToggle = () => {
    setActive(!active)
  }
    return (
      <div className={styles.App}>
      <header className={active === true ? styles.background : ""}>
        <div className={styles.iconlogo}>
          <Link href="/">
          <Image
            src="/images/icon.svg" // Route of the image file
            height={64} // Desired size with correct aspect ratio
            width={64} // Desired size with correct aspect ratio
            alt="icon"
          />
          </Link>
          <div onClick={useclassToggle} className={`${styles.burger} ${active === true ? styles.toggle : ""}`}>
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <div className={styles.line3}></div>
          </div>
        </div>
        <nav className={active === true ? styles.toggle : ""}>
          <ul className={styles.topUl}>
            <li className={styles.topLi}><Link className={styles.toplink} href="/"><h2>top</h2></Link></li>
            <li className={styles.topLi}><Link className={styles.toplink} href="/posts/aboutme"><h2>about</h2></Link></li>
            <li className={styles.topLi}><Link className={styles.toplink} href="/posts/portfolio"><h2>portfolio</h2></Link></li>
            <li className={styles.topLi}><Link className={styles.toplink} href="/posts/contact"><h2>contact</h2></Link></li>
            <li className={styles.topLi}><Link className={styles.toplink} href="/posts/test"><h2>blog</h2></Link></li>
          </ul>
          
        </nav>
        
      </header>
      </div>
    );
  }
  
  export default Header;