import React from 'react';
import styles from './Contacts.module.css';
import styleContainer from '../common/styles/Container.module.css';

const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <h2 className={styles.title}>My contacts</h2>
                <form action="" className={styles.contactsForm}>
                    <input type="text" id={'name'} placeholder={'Name'}/>
                    <input type="text" id={'e_mail'} placeholder={'e-mail'}/>
                    <textarea name="" id="" placeholder={'Your message'}></textarea>
                </form>
                <button className={styles.button}>Send</button>
            </div>
        </div>
    );
};

export default Contacts;