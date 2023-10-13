import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slide1 from "./slides/Slide1";
import Slide2 from "./slides/Slide2";
import Slide3 from "./slides/Slide3";
import Slide4 from "./slides/Slide4";
import Slide5 from "./slides/Slide5";
import Slide6 from "./slides/Slide6";
import Slide7 from "./slides/Slide7";
import Slide8 from "./slides/Slide8";
import Slide9 from "./slides/Slide9";
import Slide10 from "./slides/Slide10";

//import { wrap } from "popmotion";

const variants = {
  enter: (direction) => {
    return {
      //x: direction > 0 ? 2000 : -2000,
      opacity: 0,
      zIndex: 10,
      //   transform: "translate( 40%, 0 ) scale( 0.8 ) rotateY( -20deg )",
    };
  },
  center: {
    zIndex: 10,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      //x: direction < 0 ? 2000 : -2000,
      opacity: 0,
      zIndex: 10,
      transform: "rotateY(90deg)",
      //   transform: "translate( 40%, 0 ) scale( 0.8 ) rotateY( -20deg )",
    };
  },
};

const Slider = (props) => {
  const [[page, direction], setPage] = useState([1, 0]);
  const { showSlide } = props;
  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  //const imageIndex = wrap(0, images.length, page);

  // const paginate = (newDirection) => {
  //   if (page + newDirection === 0) setPage([10, newDirection]);
  //   else if (page + newDirection === 11) setPage([1, newDirection]);
  //   else setPage([page + newDirection, newDirection]);
  // };

  useEffect(() => {
    if (page > props.curPage) setPage(props.curPage, 1);
    else if (page < props.curPage) setPage(props.curPage, -1);
  }, [props]);

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="w-full h-full absolute sm:overflow-hidden"
          transition={{
            x: { stiffness: 300, damping: 30, duration: 0.3 },
            opacity: { duration: 0.8 },
          }}
          //   drag="x"
          //   dragConstraints={{ left: 0, right: 0 }}
          //   dragElastic={1}
          //   onDragEnd={(e, { offset, velocity }) => {
          //     const swipe = swipePower(offset.x, velocity.x);

          //     if (swipe < -swipeConfidenceThreshold) {
          //       paginate(1);
          //     } else if (swipe > swipeConfidenceThreshold) {
          //       paginate(-1);
          //     }
          //   }}
        >
          {page === 1 && <Slide1 showSlide={showSlide} />}
          {page === 2 && <Slide2 />}
          {page === 3 && <Slide3 />}
          {page === 4 && <Slide4 />}
          {page === 5 && <Slide5 />}
          {page === 6 && <Slide6 />}
          {page === 7 && <Slide7 />}
          {page === 8 && <Slide8 />}
          {page === 9 && <Slide9 />}
          {page === 10 && <Slide10 />}
          {/* {page === 1 && <div className="w-full h-full bg-black"></div>}
          {page === 2 && <div className="w-full h-full bg-red-500"></div>} */}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Slider;
