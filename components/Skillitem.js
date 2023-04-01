import Image from "next/image";
import styles from '../styles/Aboutme.module.css'
const Skillitem = (props) => {
    
    
    let image = props.image;
    let text = props.text;
    return (
        <div className={styles.oneitem}>
            <Image 
                src={image} // Route of the image file
                width={50}
                height={50}
                alt="icon"
            />
            <p className={styles.intext}>{text}</p>
        </div>
    );
  }
  
export default Skillitem;