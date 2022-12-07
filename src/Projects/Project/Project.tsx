import React from 'react';
import styles from './Project.module.css';

type ProjectType = {
    projectName: string
    description: string
}
const Project = (props: ProjectType) => {
    return (
        <div className={styles.project}>
            <div className={styles.imageContainer}>
                <a href={''}>Watch</a>
            </div>
            <div className={styles.projectName}>
                <h4>{props.projectName}</h4>
            </div>
            <div className={styles.description}>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default Project;