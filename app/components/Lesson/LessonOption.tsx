import { View, StyleSheet, Image, TouchableOpacity } from "react-native"
import React from "react"
import { Text } from "../Text"
import { Spacer } from "../Spacer"
import { colors } from "app/theme"

interface ILessonOption {
  title?: string
  image?: any
  onPress?(): void
}

export const LessonOption = (props: ILessonOption) => {
  const { image, title, onPress } = props
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <Spacer height={10} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    borderRadius: 200,
    padding: 20,
    width: 150,
    height: 150,
    borderWidth: 2,
    borderColor: colors.palette.secondaryGreen400,
  },
  text: {
    fontSize: 20,
    fontFamily: "NotoSerif_Condensed-SemiBold",
    color: colors.palette.green900,
  },
})
