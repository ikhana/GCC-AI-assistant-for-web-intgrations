import background from "../../assets/image/background.png";
// Potentially, a new image can be added to showcase the process visually.

const Slide6 = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center z-10 absolute text-white">
      <p className="text-[48px] font-bold pb-6 z-10 absolute top-8 tracking-wider">
        Dive Deep into Our Process
      </p>
      <div className="flex flex-col gap-8 tracking-wider text-[15px] sm:text-[28px] px-4 ">
        <p className="z-10">
          &#8226; Audit - Analyzing Your Current Digital Persona
        </p>
        <p className="z-10">
          &#8226; Strategy - Aligning Your Aspirations with Actionable Plans
        </p>
        <p className="z-10">
          &#8226; Creation - Crafting Content that Resonates
        </p>
        <p className="z-10">
          &#8226; Optimization - Ensuring Maximum Impact and Reach
        </p>
        {/* Additional points can be added as needed */}
      </div>
      <img
        src={background}
        alt="Process Background"
        className="w-full h-full absolute"
      />
    </div>
  );
};

export default Slide6;
