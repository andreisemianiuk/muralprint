import React from 'react';
import image from '../../common/images/mainPage.jpg'
import styles from './BusinessSet.module.css'


const BusinessSet = () => {
    const steps = [
        {id: 1, step: 'шаг 1', description: 'Выбрать интересующую Вас продукцию'},
        {id: 2, step: 'шаг 2', description: 'Нажать кнопку «ЗАКАЗАТЬ»'},
        {id: 3, step: 'шаг 3', description: 'Наш менеджер свяжется с Вами'},
        {id: 4, step: 'шаг 4', description: 'Согласовать макет'},
        {
            id: 4,
            step: 'шаг 5',
            description: `Получить готовый заказ на \n нашем производстве или заказать  доставку`
        },
    ]
    return (
        <div className={styles.stepsContainer}>
            <div className={styles.stepsWrapper}>
                <div className={styles.steps}>
                    {steps.map(step =>
                        <>
                            <span key={step.id} className={styles.step}>{step.step}</span>
                            <span className={styles.description}>{step.description}</span>
                        </>
                    )}
                </div>
                <img src={image} alt="logo" className={styles.image}/>
            </div>
        </div>
    );
};

export default BusinessSet;