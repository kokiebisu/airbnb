/**
 * Generates a map of button variants based on the given platform
 * @param {string} platform - Platform in which the component will be used in
 * @example generateVariants(Platform.ios, ...)
 * @param {function} web - Function which generates the variants for the web
 * @param {function} ios - Function which generates the variants for ios
 * @param {function} android - Function which generates the variants for android
 * @param {Object} props - Button props being passed in
 * @returns
 */
export const generateVariants = (platform, web, ios, android, props) => {
  return {
    ios: ios(props),
    android: android(props),
    web: web(props),
  }[platform];
};
