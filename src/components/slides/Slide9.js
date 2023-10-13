import React from 'react';
import background from "../../assets/image/background.png";

const Slide10 = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center z-10 absolute text-white">
      <p className="text-[35px] sm:text-[50px] font-bold pb-6 z-10 absolute top-8 tracking-wider">
        Get in Touch
      </p>
      <p className="text-[17px] sm:text-[30px] font-bold z-10 px-[5%] sm:px-[20%] text-center">
        For more information, please contact us at akinsolaestherr@gmail.com
      </p>
      <img src={background} alt="background" className="w-full h-full absolute" />
    </div>
  );
};

export default Slide10;
