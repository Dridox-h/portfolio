import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion } from "framer-motion";


import image1 from "/src/assets/img/currentproject/images1.png";
import image2 from "/src/assets/img/currentproject/images2.png";


const CurrentProject = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    image1,
    image2,

  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full mb-10">
      <motion.h1 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-center mb-6 text-neutral-100">Projet Actuel</motion.h1>
      <div className="relative w-full h-[50vh] overflow-hidden mb-8">
        <img
          src={images[currentImageIndex]}
          alt={`Project image ${currentImageIndex + 1}`}
          className="w-full h-full object-cover"
        />
        <button 
          onClick={prevImage} 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
        >
          <FaChevronLeft />
        </button>
        <button 
          onClick={nextImage} 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
        >
          <FaChevronRight />
        </button>
      </div>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto px-4 border-b border-neutral-800 pb-12">
        <h2 className="text-2xl font-bold mb-4 text-center text-neutral-100">Mon Projet en Cours</h2>
        <p className="text-neutral-300 text-center leading-relaxed">
          Réalisation d'un scraper web afin de récupérer de la data pour potentiellement pouvoir faire un bot d'arbitrage
        </p>
      </motion.div>
    </div>
  );
};

export default CurrentProject;