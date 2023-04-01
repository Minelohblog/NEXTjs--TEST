import Link from "next/link";
import styles from '/styles/About.module.css'
import Image from "next/image";

const About = () => {
    return (
      <div className={`${styles.block} ${"container"}`}>
        <h1>about<br/>me</h1>
        <h3 className={styles.text}>自己紹介</h3>
        <div className={styles.detail}>
            <div className={`${styles.image} ${"mt-5"}`}>
                <Image 
                    src="/images/Plofile_image.png" // Route of the image file
                    width={300}
                    height={300}
                    layout={"responsive"}
                    alt="icon"
                />
            </div>
            <nav class="mt-5">
                <ul className={styles.snsUl}>
                    <li>
                        <Link href="https://twitter.com/MailogBlog" target="_blank">
                            <Image
                            src="/images/logo/twitter.png" // Route of the image file
                            width={32}
                            height={32}
                            alt="twitter"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.instagram.com/y_ne_taku62" target="_blank">
                            <Image
                            src="/images/logo/instagram.png" // Route of the image file
                            width={32}
                            height={32}
                            alt="instagram"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://github.com/nk-otokulove" target="_blank">
                            <Image
                            src="/images/logo/github.png" // Route of the image file
                            width={32}
                            height={32}
                            alt="github"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://my-museum.com" target="_blank">
                            <Image
                            src="/images/logo/note.png" // Route of the image file
                            width={32}
                            height={32}
                            alt="note"
                            />
                        </Link>
                    </li>
                </ul>
            </nav>
            <table class="table table-borderless">
                <tbody>
                    <tr>
                    <th><p>名前</p></th>
                    <td><p>ヨネクラ タクミ</p></td>
                    </tr>
                    <tr>
                    <th scope="row"><p>出身</p></th>
                    <td><p>神奈川県（現在も在住）</p></td>
                    </tr>
                    <tr>
                    <th scope="row"><p>年齢</p></th>
                    <td colspan="2"><p>20歳 大学二年生</p></td>
                    </tr>
                    <tr>
                    <th scope="row"><p>趣味</p></th>
                    <td colspan="2"><p>自転車・カメラ・世界史（特にイングランド史・中近世フランス史が好きです）</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    );
  }
  
  export default About;