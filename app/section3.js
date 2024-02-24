"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import './grid.css';
import Carousel from 'react-elastic-carousel';

const apiEndpoint = 'https://api.testvalley.kr/collections?prearrangedDiscount';

const Items = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiEndpoint);
                const filteredData = response.data.items.filter(item => item.type === 'SINGLE' && item.viewType === 'TILE');
                setData(filteredData);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div >
            {error && <div>Something went wrong: {error.message}</div>}
            
            <div className="grid">
                {data.map((item, index) => (
                    <div key={index} className="grid-item">
                        <div className="left-section">
                            <h5> {item.title}</h5>
                            <p>{item.subtitle}</p>
                        </div>
                        <div className="right-section">
                            <Carousel itemsToShow={4} className="grid-container" style={{ backgroundColor: 'white', paddingRight: '100px' }}>
                                {item.items.map((subItem, idx) => (
                                    <div key={idx} className="subitem">
                                        <div className="image-container">
                                            <img 
                                                src={subItem.publication.media[0].uri} 
                                                alt={`Image for ${subItem.name}`} 
                                                style={{ width: '100%', height: '100%' }}
                                            />
                                            <div className="tags" style={{ marginTop: '10px' }}>
                                                {subItem.publication.tagsOnImage[0] && (
                                                    <>{subItem.publication.tagsOnImage[0]}</>
                                                )}
                                            </div>
                                        </div>
                                        <p>{subItem.publication.productName}</p>
                                        <p className={subItem.publication.priceInfo.discountRate ? 'discount-rate' : ''}>
                                            {subItem.publication.priceInfo.discountRate ? `${subItem.publication.priceInfo.discountRate}% ${subItem.publication.priceInfo.price}` : subItem.publication.priceInfo.price}
                                        </p>                                        
                                        <p><span role="img" aria-label="star">⭐</span>{subItem.publication.rating}</p>
                                    </div>
                                ))}
                            </Carousel>
                            <hr/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Items;
