import { motion } from "framer-motion";

const Popup = (props) => {
  return (
    <div className="w-full h-full flex flex-col-reverse justify-start items-start z-20 absolute text-blue-500 ml-4">
      <motion.div
        className="w-auto h-auto bg-red-200 rounded-lg flex flex-col p-2 mb-4 pr-4 pl-4"
        animate={{
          opacity: [0, 1],
        }}
        transition={{
          delay: props.wait || 4,
          duration: 4,
          ease: "easeInOut",
          times: [0, 1],
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 36,
        }}
      >
        <p className="text-blue-500 text-[18px] text-center pt-3.5">
          {props.text1}
        </p>
        {
          props.gap ? (
            <p className="text-blue-500 text-[18px] text-center pt-3.5 pb-3.5">
              {props.text2}
            </p>
          ) :
          (
            <p className="text-blue-500 text-[18px] text-center pb-3.5">
              {props.text2}
            </p>
          )
        }
      </motion.div>
    </div>
  );
};

export default Popup;
