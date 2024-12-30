export const motionShake = {
  initial: {
    x: 0,
  },
  enter: {
    x: 15,
    transition: {
      duration: 250,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};
