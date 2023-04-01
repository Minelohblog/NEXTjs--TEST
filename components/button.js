import Link from 'next/link';
import styles from '/styles/button.module.css'
const button = (props) => {
    let jump = props.link
    return (
        <div className={`${styles.block} ${"container"}`}>
            <Link href={jump}>
                <button type="button" className={styles.button}><p>MORE</p></button>
            </Link>
        </div>
    );
  }
  
export default button;