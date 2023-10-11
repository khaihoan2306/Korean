import { View, StyleSheet, Image } from "react-native"
import React from "react"
import { Text } from "../Text"
import Modal from "react-native-modal"
import { Button } from "../Button"
import { Spacer } from "../Spacer"
import { ScreenDimension } from "app/constants"
import { colors } from "app/theme"

export const CorrectModal = (props: any) => {
  const { isVisible, onPress, data, correct } = props
  return (
    <Modal testID={"modal"} isVisible={isVisible}>
      <View style={styles.content}>
        <Text style={correct === true ? styles.correctText : styles.incorrectText}>
          {correct === true ? "Chính xác!" : "Chưa chính xác!"}
        </Text>
        <Spacer height={20} />
        {data?.image && <Image source={{ uri: data?.image }} style={styles.image} />}
        <Text style={styles.text}>{data?.korean}</Text>
        <Spacer height={20} />
        <Text style={styles.text}>{data?.vietnamese}</Text>
        <Spacer height={30} />
        <Button onPress={onPress} title="Tiếp theo" />
      </View>
    </Modal>
  )
}
const styles = StyleSheet.create({
  content: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
  correctText: {
    fontSize: 30,
    color: colors.palette.green700,
    fontFamily: "NotoSerif_Condensed-Bold",
  },
  image: {
    width: "90%",
    height: ScreenDimension.HEIGHT * 0.3,
    resizeMode: "contain",
  },
  incorrectText: {
    fontSize: 30,
    color: "red",
    fontFamily: "NotoSerif_Condensed-Bold",
  },
  text: {
    fontFamily: "NotoSerif_Condensed-Bold",
    fontSize: 24,
  },
})
