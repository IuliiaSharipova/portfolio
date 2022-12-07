import React from 'react';
import styles from './Skill.module.css';

type SkillType = {
    skillName: string
    description: string
}

const Skill = (props: SkillType) => {
    return (
        <div className={styles.skill}>
            <div className={styles.skillIcon}></div>
            <h3>{props.skillName}</h3>
            <p>{props.description}</p>
        </div>
    );
};

export default Skill;