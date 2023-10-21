import { View, ActivityIndicator, StyleSheet } from "react-native"
import React from "react"
import { ScreenDimension } from "app/constants"
import { colors } from "app/theme"

export const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.palette.green300} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    width: ScreenDimension.WIDTH,
    height: ScreenDimension.HEIGHT,
    alignItems: "center",
    justifyContent: "center",
  },
})
