import META from './meta'
import TOP from './header'
import styles from '../../styles/portfolio.module.css'

import Image from 'next/image'
import Link from 'next/link'
const portfolioOneitem = (props) => {

    let images = "/images/testimage/2.png"//props.images;
    let title = "Excelオセロ"//props.title;
    let text = "高校3年生の時に作成。初めて作った作品。Excel上で動くオセロ、それだけ。\nぶっちゃけ特筆すべきこともないんですけど、短いコードで動かすことを意識して作っていた記憶があります。\n斜め方向の判定でバグがあるらしいのですが、制作者本人は未確認のため要検証となってます。（ぶっちゃけ今更直す気が無い）"//props.text;
    let links = "https://www.youtube.com/"//props.link;
    let linksOpiton = "ダウンロードはこちらから" //props.linksOption;
    let Tours = "EXCEL"//props.tours;
    let period = "2021年1月頃\n（約一か月）"//props.period
    return (
      <>
        <META></META>
        <TOP></TOP>
        <div  className={styles.portfolio}>
            <div className={styles.img}>
              <Image 
                src={images} // Route of the image file
                layout="fill" objectFit="contain" 
                alt="icon"
              />
            </div>
            
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.block}>
            <div className={styles.text}>
              <h4>制作概要</h4>
              <p>{text}</p>
              <h4>外部リンク</h4>
              <Link href={links}>{linksOpiton}</Link> 
            </div>
            <div className={styles.side}>
              <h4>使用ツール</h4>
              <p>{Tours}</p>
              <h4>制作期間</h4>
              <p>{period}</p>
              
            </div>
          </div>
        </div>
      
      </>
    )
  }
  export default portfolioOneitem;