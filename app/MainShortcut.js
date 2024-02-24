"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MainMenu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.testvalley.kr/main-shortcut/all');
      setMenuItems(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="flex flex-wrap justify-center items-center space-x-4 mt-8">
      {menuItems.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <img src={item.imageUrl} alt={item.title} className="w-16 h-16 rounded-full" />
          <p className="text-sm">{/* Render title only on medium and larger screens */}
            <span className="hidden md:inline">{item.title}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default MainMenu;
