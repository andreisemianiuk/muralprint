import React from 'react';

import doneImage from '../images/images.png'
import styles from './IsDone.module.css'

const IsDone = () => {
    return (
        <div className={styles.container}>
            <span className={styles.title}>Спасибо. Заявка принята.</span>
            {/*<CheckCircleOutline fontSize='large' className={styles.icon}/>*/}
            <img
                src={doneImage}
                alt="done"
                className={styles.icon}/>
            <span className={styles.description}>В ближайшее время с Вами свяжется наш менеджер.</span>
        </div>
    );
};

export default IsDone;