export const renderSize = (card, size) => {
  switch (size) {
    case 'sm':
      return 'w-8 md:w-12';
    case 'lg':
      return 'w-12 md:w-16';
    default:
      return;
  }
};
