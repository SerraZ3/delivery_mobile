export const toFloat = (value) => parseFloat(parseFloat(value).toFixed(2));
export const getWallpaper = (images) =>
  images.find((val) => val.pivot.wallpaper);

export const dateLess10 = (number) => {
  if (number < 10) {
    number = '0' + number;
  }
  return number;
};
