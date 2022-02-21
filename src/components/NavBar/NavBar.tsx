import React from 'react';
import {
    BUSINESS_BOX_PATH,
    CALENDAR_PATH,
    NOTEBOOK_PATH,
    PACKAGE_PATH,
    POSTAL_PATH
} from "../../Routes/routesConstants/routesConstants";
import {NavLink} from 'react-router-dom';
import styles from './NavBar.module.css'
import FiberNewIcon from '@material-ui/icons/FiberNew';

const NavBar = () => {
    const activeStyle = {
        backgroundColor: 'white',
        border: '1px solid #21344A',
        color:'#f50057'
    }

    return (
        <div className={styles.navBarContainer}>
                <NavLink activeStyle={activeStyle} className={styles.navLink} to={CALENDAR_PATH}>
                    Календарь
                </NavLink>
                <NavLink activeStyle={activeStyle} className={styles.navLink} to={NOTEBOOK_PATH}>
                    Блокнот
                </NavLink>
                <NavLink activeStyle={activeStyle} className={styles.navLink} to={POSTAL_PATH}>
                    Открытка
                </NavLink>
                <NavLink activeStyle={activeStyle} className={styles.navLink} to={PACKAGE_PATH}>
                    Упаковка
                </NavLink>
                <NavLink activeStyle={activeStyle} className={styles.navLink} to={BUSINESS_BOX_PATH}>
                    Бизнес-набор
                </NavLink>
        </div>
    );
};

export default NavBar;