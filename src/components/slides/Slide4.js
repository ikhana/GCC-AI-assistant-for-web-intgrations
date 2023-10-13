import background from "../../assets/image/background.png";
import avatar1 from "../../assets/image/avatar1.png";
import avatar2 from "../../assets/image/avatar2.png";
import avatar3 from "../../assets/image/avatar3.png";
import avatar4 from "../../assets/image/avatar4.png";

const Slide4 = () => {
  return (
    <div className="w-full h-full flex flex-col items-center absolute z-10">
      <p className="text-white text-[48px] font-bold z-10 py-8 tracking-wider">
        We Unlock the Good in Your Brand
      </p>
      <div className="flex flex-col gap-4 z-10 text-white self-start px-[5%] tracking-wide text-[15px] sm:text-[24px] sm:pb-0 pb-6">
        <p>&#8226; Showcasing Your Authentic Self</p>
        <p>&#8226; Identifying and Amplifying Your Values</p>
        <p>&#8226; Ensuring Your Target Market Sees, Relates, and Chooses You Repeatedly</p>
      </div>
      <div className="flex sm:flex-row flex-col z-10 mt-auto">
        <div className="flex sm:w-[50%]">
          <img src={avatar1} alt="Unlocking Brand Authenticity" className="w-[50%]" />
          <img src={avatar2} alt="Amplifying Brand Values" className="w-[50%]" />
        </div>
        <div className="flex sm:w-[50%]">
          <img src={avatar3} alt="Relatable Brand Narrative" className="w-[50%]" />
          <img src={avatar4} alt="Ensuring Brand Choice" className="w-[50%]" />
        </div>
      </div>
      <img
        src={background}
        alt="Illuminating Brand Background"
        className="w-full h-full absolute"
      />
    </div>
  );
};

export default Slide4;
