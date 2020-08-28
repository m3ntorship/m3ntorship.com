import useMedia from './useMedia';
import { isSSR } from './utils';
const useMobileAnimation = (settings, componentId) => {
  if (isSSR()) {
    return false;
  }

  const isDesktop = useMedia(['(max-width: 1024px)'], [false], true);
  // if we are in mobile
  if (!isDesktop) {
    // and we enabled all animations
    if (settings.enable_mobile_animations.all) {
      // animate
      return true;
    } else {
      // we didn't enable all animation, check the component-sepcific flag
      return settings.enable_mobile_animations[componentId];
    }
  } else {
    // we are not in mobile, then animate.
    return true;
  }
};

export default useMobileAnimation;
