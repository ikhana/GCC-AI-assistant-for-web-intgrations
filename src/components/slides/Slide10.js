import background from "../../assets/image/background.png";
import logo from "../../assets/image/logo.png";

const Slide9 = () => {
  return (
    <div className="w-full h-full flex flex-col z-10 absolute text-white">
      <p className="text-[28px] sm:text-[35px] font-bold pt-6 pb-6 z-10 tracking-wider pl-6">
        HOW SMPL WINS
      </p>
      <div className="w-full h-full flex sm:flex-row flex-col z-10 px-[5%] sm:gap-[5%] ">
        <div className="sm:w-[50%] flex flex-col gap-4">
          <p className="text-[#cdcdcd] text-[20px] sm:text-[40px]">
            Technology-Driven Solutions
          </p>
          <p className="text-[12px] sm:text-[20px]">
            At SMPL, we leverage cutting-edge technologies to simplify credit card processing and fintech solutions. While technology is a tool, it’s a tool we use to improve lives and businesses.
          </p>
          <p className="text-[#cdcdcd] text-[20px] sm:text-[40px] mt-4">
            Efficient Operations
          </p>
          <p className="text-[12px] sm:text-[20px]">
            Our goal is to remain agile and responsive to the dynamic fintech industry. We leverage AI tools like GPT-4 and GitHub Copilot to enhance productivity across all workstreams.
          </p>
        </div>
        <div className="sm:w-[50%] flex flex-col gap-4 pt-16">
          <p className="text-[#cdcdcd] text-[20px] sm:text-[40px]">
            Sustainable Growth
          </p>
          <p className="text-[12px] sm:text-[20px]">
            We believe in taking a long-term view. Our technology solutions aren’t just about meeting the needs of today but are designed to be scalable and adaptable for the challenges of tomorrow.
          </p>
        </div>
      </div>
      <img
        src={background}
        alt="background"
        className="w-full h-full fixed"
      />
      <img
        src={logo}
        alt="logo"
        className="w-12 h-12 sm:w-[90px] sm:h-[90px] fixed bottom-[30px] right-[30px]"
      />
    </div>
  );
};

export default Slide9;
