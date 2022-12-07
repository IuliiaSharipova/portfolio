import React from 'react';
import styles from './Project.module.css';

type ProjectType = {
    projectName: string
    description: string
}
const Project = (props: ProjectType) => {
    return (
        <div className={styles.project}>
            <div className={styles.projectImage}>
                <a href={''}>Watch</a>
            </div>
            <h4>{props.projectName}</h4>
            <p>{props.description}</p>
        </div>
    );
};

export default Project;