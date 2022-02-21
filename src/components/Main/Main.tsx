import React from 'react';
import BusinessSet from "../BusinesSet/BusinessSet";
import {FeedbackForm} from "../FeedbackForm/FeedbackForm";
import OurWork from "../OurWork/OurWork";
import styles from './Main.module.css'

const Main = () => {
    return (
        <div className={styles.mainBlockContainer}>
            <BusinessSet />
            <FeedbackForm />
            <OurWork />
        </div>

    );
};

export default Main;