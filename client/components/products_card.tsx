// src/components/Card.tsx
import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="w-40 rounded-xl shadow-lg m-4 py-4 px-4 lg:px-8 lg:w-80 lg:py-8">
      <img className="w-full rounded-xl" src={imageUrl} alt={title} height={36}/>
      <div className="w-full flex flex-col justify-center mt-2 lg:mt-4">
        <div className="font-bold text-xl lg:text-3xl roboto lg:text-nowrap">{title}</div>
        <p className="text-black text-base lg:mt-2 mt-1 lg:text-2xl roboto">
          {description}
        </p>
        <button className='bg-secondary text-white text-md px-8 py-1.5 lg:py-3 lg:text-2xl rounded-lg mt-2 lg:mt-4 roboto'>Buy</button>
      </div>
    </div>
  );
};

export default Card;
