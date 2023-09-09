// TODO: write documentation for colors and palette in own markdown file and add links from here

const palette = {
  green100: "#E6FAF6",
  green200: "#D9F7F2",
  green300: "#B0EEE3",
  green400: "#00C8A6",
  green500: "#00B495",
  green600: "#00A085",
  green700: "#00967D",
  green800: "#007864",
  green900: "#005A4B",
  green1000: "#00463A",

  secondaryGreen100: "#E8EFEE",
  secondaryGreen200: "#DCE8E6",
  secondaryGreen300: "#B6CFCB",
  secondaryGreen400: "#146356",
  secondaryGreen500: "#12594D",
  secondaryGreen600: "#104F45",
  secondaryGreen700: "#0F4A41",
  secondaryGreen800: "#0C3B34",
  secondaryGreen900: "#092D27",
  secondaryGreen1000: "#07231E",

  green2: "#316F64",

  dark100: "#E8E8E8",
  dark200: "#DDDDDD",
  dark300: "#B9B9B8",
  dark400: "#1D1D1B",
  dark500: "#1A1A18",
  dark600: "#171716",
  dark700: "#161614",
  dark800: "#111110",
  dark900: "#0D0D0C",
  dark1000: "#0A0A09",

  overlay20: "rgba(25, 16, 21, 0.2)",
  overlay50: "rgba(25, 16, 21, 0.5)",
  text1: "#152E35",
  text2: "#788D92",
  text3: '#0E343D',

  white: "#FFFFFF",
  black: "#000000",
  gray: "#F5F5F5",
  gray67: "#676767",
  grayEBEDEF: "#EBEDEF",
} as const

export const colors = {
  text: palette.dark500,
  background: palette.white,
  button: palette.secondaryGreen500,
  border: palette.grayEBEDEF,
  palette
}
