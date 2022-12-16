const light = {
  name: "light",
  colors: {
    bgColor: "#f8f8f8",
    asideBg: "#fdfdfd",
    btnBg: "#d1d1d1",
    hoverBtnBg: "#222",
    primaryTextColor: "#fff",
    secondaryTextColor: "#000",
    grayTextColor: "#AFAFAF",
    redTextColor: "#ff5a5a",
    titlesColor: "#5e5e5e",
    green: "#03A300",
    box: "#F0F0F0",
    valueColor: "#000",
  },
};

const dark = {
  name: "dark",
  colors: {
    bgColor: "#333",
    asideBg: "#444444",
    btnBg: "#4B4B4B",
    hoverBtnBg: "#222",
    primaryTextColor: "#fff",
    secondaryTextColor: "#000",
    grayTextColor: "#AFAFAF",
    redTextColor: "#ff5a5a",
    titlesColor: "#fff",
    green: "#05FA00",
    box: "#3D3D3D",
    valueColor: "#fff",
  },
};

export type themeProps = {
  theme: typeof light;
};

export { light, dark };
