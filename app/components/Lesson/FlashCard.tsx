import { View, StyleSheet, TouchableOpacity, Image } from "react-native"
import React from "react"
import { Text } from "../Text"
import { colors } from "app/theme"
import { ScreenDimension } from "app/constants"
import { Spacer } from "../Spacer"

interface IFlashCard {
  korean?: string
  vietnamese?: string
  image?: any
}

export const FlashCard = (props: IFlashCard) => {
  const { image, korean, vietnamese } = props
  return (
    <TouchableOpacity style={styles.container}>
      {image && <Image style={styles.image} source={{ uri: image }} />}
      <Spacer height={10} />
      <Text style={styles.korean}>{korean}</Text>
      <Spacer height={20} />
      <Text style={styles.vietnamese}>{vietnamese}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    borderWidth: 3,
    borderColor: colors.palette.green900,
    backgroundColor: colors.palette.secondaryGreen200,
    padding: 24,
    width: 0.7 * ScreenDimension.WIDTH,
    alignItems: "center",
    marginRight: 20,
    justifyContent: "center",
    minHeight: 0.6 * ScreenDimension.HEIGHT,
  },
  korean: {
    fontSize: 24,
    fontFamily: "NotoSerif_Condensed-Bold",
  },
  vietnamese: {
    fontSize: 20,
  },
  image: {
    width: "90%",
    height: 0.4 * ScreenDimension.HEIGHT,
    resizeMode: "contain",
  },
})
