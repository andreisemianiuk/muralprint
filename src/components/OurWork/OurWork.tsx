import React from 'react';
import {v1} from "uuid";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from './images/1.jpg'
import img2 from './images/2.jpg'
import img3 from './images/3.jpg'
import img4 from './images/4.jpg'
import img5 from './images/5.jpg'
import img6 from './images/6.jpg'
import img7 from './images/7.jpg'
import img8 from './images/8.jpg'
import img9 from './images/9.jpg'
import img10 from './images/10.jpg'
import img11 from './images/11.jpg'
import img12 from './images/12.jpg'
import img13 from './images/13.jpg'
import img14 from './images/14.jpg'
import img15 from './images/15.jpg'
import img16 from './images/16.jpg'

import styles from './OurWork.module.css'

const OurWork = () => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const images = [
        {id: v1(), src: img1},
        {id: v1(), src: img2},
        {id: v1(), src: img3},
        {id: v1(), src: img4},
        {id: v1(), src: img5},
        {id: v1(), src: img6},
        {id: v1(), src: img7},
        {id: v1(), src: img8},
        {id: v1(), src: img9},
        {id: v1(), src: img10},
        {id: v1(), src: img11},
        {id: v1(), src: img12},
        {id: v1(), src: img13},
        {id: v1(), src: img14},
        {id: v1(), src: img15},
        {id: v1(), src: img16}
    ]

    return (
        <div className={styles.ourWorkContainer}>
            <div className={styles.ourWorkWrapper}>
                <Slider className={styles.sliderContainer} {...settings}>
                    {images.map(image => <img className={styles.image} key={image.id} src={image.src}
                                              alt="нашии работы"/>)}
                </Slider>
            </div>
        </div>
    );
};

export default OurWork;