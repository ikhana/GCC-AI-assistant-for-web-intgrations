import React from 'react';
import background from "../../assets/image/background.png";
import photo1 from "../../assets/image/CEOESTHER.jpg";
import anon from "../../assets/image/ANON.png";

const Slide7 = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center z-10 absolute text-white p-[5%]">
      <p className="text-[48px] font-bold pb-6 z-10">
        Meet the GCC Team, Your Allies in this Expedition.
      </p>
      <div className="flex gap-8 z-10 lg:text-[20px] text-[15px] w-full overflow-x-auto">
        {/* Each team member card should potentially be a separate component, reused and passed different props for different team members */}
        {[{
          name: "Esther Akinsola",
          role: "CEO",
          imgSrc: photo1,
          description: "Visionary leader with a passion for innovative solutions and elevating brands.",
        }, {
          name: "Inaam",
          role: "Brand Manager",
          imgSrc: anon,
          description: "Spearheading brand strategies with creativity and analytical expertise.",
        }, {
          name: "Ryan Farris",
          role: "CTO",
          imgSrc: anon,
          description: "Architecting robust, scalable tech with a keen eye on innovative trends.",
        }, {
          name: "Additional",
          role: "Team Members",
          imgSrc: anon,
          description: "Diverse expertise across fintech, marketing, and business development.",
        }].map(member => (
          <div className="flex flex-col items-center w-[25%]">
            <p>{member.name}</p>
            <p className="text-[#cdcdcd] pb-2.5">{member.role}</p>
            <img src={member.imgSrc} alt={member.name} className="w-[70%] pb-2.5" />
            <p className="lg:text-[17px] text-[12px] text-center">
              {member.description}
            </p>
          </div>
        ))}
      </div>
      <img src={background} alt="background" className="w-full h-full fixed" />
    </div>
  );
};

export default Slide7;
