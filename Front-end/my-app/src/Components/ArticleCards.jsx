import React from 'react';
import images from '../constants/images';

{/* <div className={`bg-white rounded-lg overflow-hidden  ${className}`}> */}
const ArticleCards = ({className}) => {
  return (
    <div className="bg-white font-[sans-serif] my-4">
    <div className="max-w-7xl mx-auto">
      <div className="text-center">
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-md:max-w-lg mx-auto">
        <div className={`bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300 ${className}`}>
          <img
            src={images.picPos1}
            alt="Blog Post 1"
            className="w-full h-60 object-cover"
          />
          <div className="p-6">
            <span className="text-sm block text-gray-400 mb-2">
              10 FEB 2023 | BY JOHN DOE
            </span>
            <h3 className="text-xl font-bold text-[#333]">
              A Guide to Igniting Your Imagination
            </h3>
            <hr className="my-6" />
            <p className="text-gray-400 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              accumsan, nunc et tempus blandit, metus mi consectetur felis turpis
              vitae ligula.
            </p>
            <a href="javascript:void(0);" className="mt-4 inline-block text-blue-600 text-sm hover:underline">Read More</a>
          </div>
        </div>
        <div className={`bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300 ${className}`}>
          <img
            src={images.picPos2}
            alt="Blog Post 2"
            className="w-full h-60 object-cover"
          />
          <div className="p-6">
            <span className="text-sm block text-gray-400 mb-2">
              7 JUN 2023 | BY MARK ADAIR
            </span>
            <h3 className="text-xl font-bold text-[#333]">
              Hacks to Supercharge Your Day
            </h3>
            <hr className="my-6" />
            <p className="text-gray-400 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              accumsan, nunc et tempus blandit, metus mi consectetur felis turpis
              vitae ligula.
            </p>
            <a href="javascript:void(0);" className="mt-4 inline-block text-blue-600 text-sm hover:underline">Read More</a>
          </div>
        </div>
        <div className={`bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300 ${className}`}>
          <img
            src={images.picPos3}
            alt="Blog Post 3"
            className="w-full h-60 object-cover"
          />
          <div className="p-6">
            <span className="text-sm block text-gray-400 mb-2">
              5 OCT 2023 | BY SIMON KONECKI
            </span>
            <h3 className="text-xl font-bold text-[#333]">
              Trends and Predictions
            </h3>
            <hr className="my-6" />
            <p className="text-gray-400 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              accumsan, nunc et tempus blandit, metus mi consectetur felis turpis
              vitae ligula.
            </p>
            <a href="javascript:void(0);" className="mt-4 inline-block text-blue-600 text-sm hover:underline">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default ArticleCards;
