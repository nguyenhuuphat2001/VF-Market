const forFade = ({current}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

export const HEADER_OPTIONS = {
  headerShown: false,
  animationEnabled: true,
  transitionSpec: TRANSITION,
  cardStyleInterpolator: forFade,
};

export const TRANSITION = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
