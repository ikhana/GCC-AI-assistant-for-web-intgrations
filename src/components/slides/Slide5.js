import background from "../../assets/image/background.png";
import journeyImg from "../../assets/image/code.png"; // You might want to replace 'code.png' with an image representing the journey later.

const Slide5 = () => {
  return (
    <div className="w-full h-full flex z-10 absolute">
      <div className="flex flex-col w-[50%] text-white gap-4 z-10 pt-16 px-[8%]">
        <p className="text-[48px] font-bold pb-6">
          Begin Your Journey with a Free Consultation
        </p>
        <p className="text-[25px]">
          We Audit, Strategize, and Navigate Your Brand
        </p>
        <p className="text-[25px]">
          To Peaks Yet Unseen.
        </p>
      </div>
      <div className="flex z-10">
        <img src={journeyImg} alt="Journey Through Audit, Strategy, and Creation" className="w-full h-[90%] sm:h-full" />
      </div>
      <img
        src={background}
        alt="Journey Background"
        className="w-full h-full fixed"
      />
    </div>
  );
};

export default Slide5;
