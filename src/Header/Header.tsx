import styles from './Header.module.css'
import React from 'react';
import Nav from "../Nav/Nav";

const Header = () => {
    return (
        <div className={styles.header}>
            <Nav/>
        </div>
    );
};

export default Header;