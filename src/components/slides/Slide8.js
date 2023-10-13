import React from 'react';
import background from "../../assets/image/background.png";
import image1 from "../../assets/image/comment1.png";
import image2 from "../../assets/image/comment2.png";
import image3 from "../../assets/image/comment3.png";
import image4 from "../../assets/image/comment4.png";
import image5 from "../../assets/image/comment5.jpeg";
import image6 from "../../assets/image/comment6.png";
import image7 from "../../assets/image/comment7.jpeg";

const Slide8 = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center z-10 absolute text-white p-[5%]">
      <p className="text-[48px] font-bold pb-6 z-10">
        Your Success is Our Story.
      </p>
      <div className="flex flex-col gap-6 z-10 lg:text-[20px] text-[16px] w-full text-center pb-6">
        <p>Delivering Impact Across Various Niches</p>
        <p>Transforming Brands into Community Pillars</p>
        <p>Ensuring Your Narrative is Heard, Seen, and Felt</p>
      </div>
      <div className="flex gap-4 mt-8 w-full flex-wrap justify-center">
        {[image1, image2, image3, image4, image5, image6, image7].map((img, index) => (
          <img key={index} src={img} alt={`brand-story-${index}`} className="w-[15%] object-cover" />
        ))}
      </div>
      <img src={background} alt="background" className="w-full h-full absolute" />
    </div>
  );
};

export default Slide8;
