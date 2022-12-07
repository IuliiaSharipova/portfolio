import React from 'react';
import styles from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./Skill/Skill";

const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>My skills</h2>
                <div className={styles.skills}>
                    <Skill skillName={'HTML'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid, autem culpa, dolorem eligendi est eveniet in inventore nesciunt omnis quis quo rem similique sint soluta velit vero voluptate? Doloremque.'}/>
                    <Skill skillName={'CSS'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae in ipsa itaque natus, odit recusandae sunt tenetur voluptatibus. Alias dicta exercitationem fugiat incidunt ipsam, natus nihil odio officia ratione repellendus.'}/>
                    <Skill skillName={'JS'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda aut consequuntur corporis cum eos error est eveniet, harum ipsum nobis optio porro quo repudiandae tempora totam vel voluptates voluptatum.'}/>
                    <Skill skillName={'React'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda aut consequuntur corporis cum eos error est eveniet, harum ipsum nobis optio porro quo repudiandae tempora totam vel voluptates voluptatum.'}/>
                    <Skill skillName={'TS'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda aut consequuntur corporis cum eos error est eveniet, harum ipsum nobis optio porro quo repudiandae tempora totam vel voluptates voluptatum.'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;