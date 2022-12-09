import React from 'react';
import styles from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.css';

const Footer = () => {
    return (
        <div className={styles.footerBlock}>
            <div className={`${styleContainer.container} ${styles.footerContainer}`}>
                <h2 className={styles.title}>Iuliia Sharipova</h2>
                <div className={styles.footerSocialNetWorksContainer}>
                    <div className={styles.footerSNW}><a></a></div>
                    <div className={styles.footerSNW}><a></a></div>
                    <div className={styles.footerSNW}><a></a></div>
                    <div className={styles.footerSNW}><a></a></div>
                </div>
                <p className={styles.rights}>© 2022 All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;