import background2 from "../../assets/image/background2.png";
import image2 from "../../assets/image/image2.png";

const Slide2 = () => {
  return (
    <div className="w-full h-full flex z-10 absolute">
      <div className="flex flex-col w-[50%] text-white gap-8 z-10 items-center pt-16 px-[8%]">
        <p className="text-[48px] font-bold">
          Your Narratives, Amplified
        </p>
        <p className="text-[15px] sm:text-[25px] self-start">
          A Subtle Whisper Can Echo Across the Digital Realm
        </p>
        <p className="text-[15px] sm:text-[25px] self-start">
          GCC Bridges Your Stories to the World
        </p>
        <p className="text-[15px] sm:text-[25px] self-start">
          Amplifying Impact, Engaging Authentically
        </p>
      </div>
      <div className="flex w-full sm:w-[50%] z-10">
        <img src={image2} alt="Powerful Marketing with GCC" className="w-full h-full" />
      </div>
      <img
        src={background2}
        alt="Dynamic Background Image"
        className="w-full h-[50%] sm:w-[60%] sm:h-full brightness-50 absolute left-0"
      />
    </div>
  );
};

export default Slide2;
