// src/components/About.js
import React from 'react';

const About = ({ image, about }) => {
  // Use a default image if no image prop is provided
  const defaultImage = "https://via.placeholder.com/215";
  const imageSrc = image || defaultImage;

  return (
    <aside>
      <img src={imageSrc} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
};

export default About;
