const { mobileS, mobileM, mobileL, tablet, laptop, laptopL, desktop } = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "525px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

const device = {
  mobileS: `(min-width: ${mobileS})`,
  mobileM: `(min-width: ${mobileM})`,
  mobileL: `(min-width: ${mobileL})`,
  tablet: `(min-width: ${tablet})`,
  laptop: `(min-width: ${laptop})`,
  laptopL: `(min-width: ${laptopL})`,
  desktop: `(min-width: ${desktop})`,
  desktopL: `(min-width: ${desktop})`,
};

export default device;
