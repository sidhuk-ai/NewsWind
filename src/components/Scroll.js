import { useLottie, useLottieInteractivity } from "lottie-react";
import BreatheInOut from "./Video/BreatheInOut.json";

// const style = {
//   height: 300,
//   border: 3,
//   borderStyle: "solid",
//   borderRadius: 7,
// };

const options = {
  animationData: BreatheInOut,
};

const Scroll = () => {
  const lottieObj = useLottie(options);
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "scroll",
    actions: [
      {
        visibility: [0.2, 1],
        type: "seek",
        frames: [0, 120],
      },
    ],
  });

  return Animation;
};

export default Scroll;
