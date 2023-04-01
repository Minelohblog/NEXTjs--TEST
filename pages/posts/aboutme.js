import META from '../../components/meta'
import HEADER from '../../components/header'
import Top from '../../components/About'

import SkillBlock from '../../components/SkillBlock'

import styles from '../../styles/Aboutme.module.css'

import Skill from '../../skills.json'
export default function test() {

    return (
      <>
        <META></META>
        
        <HEADER/>
        <div className={styles.PageTop}><Top/></div>
        <div className={`${styles.Technology} ${"container"}`}>
            <h1>Skills</h1>
            <div className={styles.all}>
                {Skill.Skills.map((val,index) =>
                    <SkillBlock  key={index} text={val.name} data={val.data}/>
                )}
            </div>
        </div>
        {/*<div className={styles.photos}>
            <h1>趣味の写真を一部掲載します</h1>
    </div>*/}
        
      </>
    )
  }