export const getWidthFromStars = (stars) => {
  switch (stars) {
    case (1):
      return (`20%`);
    case (2):
      return (`40%`);
    case (3):
      return (`60%`);
    case (4):
      return (`80%`);
    case (5):
      return (`100%`);
  }
  return 0;

};
