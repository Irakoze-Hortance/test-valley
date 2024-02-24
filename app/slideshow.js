"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-elastic-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './slideshow.css'; 
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

const Slideshow = () => {
  const [carouselData, setCarouselData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.testvalley.kr/main-banner/all');
      setCarouselData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="carousel-container"> 
      <Carousel 
        showArrows={true} 
        className={styles.carousel} 
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              className={styles.arrow}
              onClick={onClickHandler}
              title={label}
            >
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              className={styles.arrow}
              onClick={onClickHandler}
              title={label}
            >
            </button>
          )
        }
      >
        {carouselData.map((item, index) => (
          <div key={index} className="carouselItem">
            <div className={styles.imageContainer}>
              <img src={item.pcImageUrl} alt={item.title} className={styles.image} />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slideshow;
