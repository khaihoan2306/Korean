import { Dimensions } from "react-native"

export const IS_FIRST_TIME = "IS_FIRST_TIME"

export const ScreenDimension = {
  WIDTH: Dimensions.get("screen").width,
  HEIGHT: Dimensions.get("screen").height
}

export * from "./lessonList"