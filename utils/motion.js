export const quesContainer = {
  hidden: {
  },
  show: {
    transition: {
      // delayChildren: 1,
      staggerChildren: 0.3,
    },
  },
};

export const quesVariants = {
  hidden: {
    opacity: 0,
    x: '100vh',
    y: '100px',
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: 'tween',
      duration: '0.5',
    },
  },
};

export const btnVariants = {
  hidden: {
    opacity: 0,
    y: '50px',
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      duration: '1.5',
    },
  },
};

export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      type: 'tween',
    },
  },
};
