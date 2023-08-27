import { View, Text } from "react-native"
import React from "react"

interface ISpacer {
  height?: number
  width?: number
}

export const Spacer = (props: ISpacer) => {
  const { height, width } = props
  return <View style={{ height, width }} />
}
