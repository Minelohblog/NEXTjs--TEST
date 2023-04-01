import styles from '../styles/Aboutme.module.css'
import Skillitem from '/components/Skillitem'

const SkillBlock = (props) => {

    let text = props.text;
    let test = props.data;

    return (
        <div className={styles.oneblock}>
            <div>
                <p className={styles.text}>{text}</p>
                <div className={styles.inner}>
                    {test.map((val,index) =>
                        <Skillitem key={index} image={val.image} text={val.name}/>
                    )}
                </div>
            </div>
        </div>
    );
  }
  
export default SkillBlock;