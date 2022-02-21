import React from 'react';
import styles from './App.module.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Routes from "./Routes/Routes";
import NavBar from "./components/NavBar/NavBar";

function App() {
    return (
        <div className={styles.app}>
            <Header/>
            <NavBar/>
            <Routes/>
            <Footer/>
        </div>
    );
}

export default App;
