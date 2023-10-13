import background from "../../assets/image/background.png";
import assistant1 from "../../assets/image/assistant1.png";
import assistant2 from "../../assets/image/assistant2.png";
import assistant3 from "../../assets/image/assistant3.png";
import assistant4 from "../../assets/image/assistant4.png";

const Slide3 = () => {
  return (
    <div className="w-full h-full flex flex-col items-center absolute z-10">
      <p className="text-white text-[48px] font-bold z-10 py-8 tracking-wider ">
        Engaging Conversations, Elevated Connections
      </p>
      <div className="flex flex-col gap-4 z-10 text-white self-start px-[5%] tracking-wide text-[15px] sm:text-[24px] sm:pb-0 pb-6">
        <p>&#8226; From Memes to Engaging Narratives.</p>
        <p>&#8226; Tailored Messaging, Amplified Impact.</p>
        <p>&#8226; Approachable Conversations, Memorable Impressions.</p>
        <p>&#8226; Converting Engagements into Genuine Connections.</p>
      </div>
      <div className="flex sm:flex-row flex-col z-10 mt-auto w-full">
        <div className="flex sm:w-[50%]">
          <img src={assistant1} alt="Meme Conversation Starter" className="w-[50%]" />
          <img src={assistant2} alt="Engaging Narrative Visual" className="w-[50%]" />
        </div>
        <div className="flex sm:w-[50%]">
          <img src={assistant3} alt="Tailored Messaging Graphic" className="w-[50%]" />
          <img src={assistant4} alt="Conversions Visualization" className="w-[50%]" />
        </div>
      </div>
      <img
        src={background}
        alt="Engaging Conversational Background"
        className="w-full h-full absolute"
      />
    </div>
  );
};

export default Slide3;
