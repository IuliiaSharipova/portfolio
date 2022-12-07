import React from 'react';
import styles from './Projects.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Project from './Project/Project';

const Projects = () => {
    return (
        <div className={styles.projectsBlock}>
            <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
                <h2 className={styles.title}>My projects</h2>
                <div className={styles.projects}>
                    <Project projectName={'Todolist'} description={'Some description'}/>
                    <Project projectName={'Social network'} description={'Some description'}/>
                    <Project projectName={'Campground'} description={'Some description'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;