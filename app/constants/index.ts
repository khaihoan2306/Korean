import { Dimensions } from "react-native"

export const IS_FIRST_TIME = "IS_FIRST_TIME"

export const ScreenDimension = {
  WIDTH: Dimensions.get("screen").width,
  HEIGHT: Dimensions.get("screen").height,
}

export const Font = {
  BLACK: "NotoSerif_Condensed-Black",
  BLACK_ITALIC: "NotoSerif_Condensed-BlackItalic",
  BOLD: "NotoSerif_Condensed-Bold",
  BOLD_ITALIC: "NotoSerif_Condensed-BoldItalic",
  EXTRA_BOLD: "NotoSerif_Condensed-ExtraBold",
  EXTRA_BOLD_ITALIC: "NotoSerif_Condensed-ExtraBoldItalic",
  EXTRA_LIGHT: "NotoSerif_Condensed-ExtraLight",
  EXTRA_LIGHT_ITALIC: "NotoSerif_Condensed-ExtraLightItalic",
  ITALIC: "NotoSerif_Condensed-Italic",
  LIGHT: "NotoSerif_Condensed-Light",
  LIGHT_ITALIC: "NotoSerif_Condensed-LightItalic",
  MEDIUM: "NotoSerif_Condensed-Medium",
  MEDIUM_ITALIC: "NotoSerif_Condensed-MediumItalic",
  REGULAR: "NotoSerif_Condensed-Regular",
  SEMIBOLD: "NotoSerif_Condensed-SemiBold",
  SEMIBOLD_ITALIC: "NotoSerif_Condensed-SemiBoldItalic",
  THIN: "NotoSerif_Condensed-Thin",
  THIN_ITALIC: "NotoSerif_Condensed-ThinItalic",
}

export * from "./lessonList"
