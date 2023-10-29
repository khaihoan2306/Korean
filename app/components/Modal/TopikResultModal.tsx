import { View, Image, StyleSheet } from "react-native"
import React from "react"
import Modal from "react-native-modal"
import { Spacer } from "../Spacer"
import { Text } from "../Text"
import { Button } from "../Button"
import { colors } from "app/theme"
import { Font, ScreenDimension } from "app/constants"
import { useStores } from "app/models"

export const TopikResultModal = (props: any) => {
  const { isVisible, onClose, onViewSolution } = props
  const {
    topikTestStore: { scores, level },
  } = useStores()

  return (
    <Modal testID={"modal"} isVisible={isVisible}>
      <View style={styles.content}>
        <Text style={level === 0 ? styles.incorrectText : styles.correctText}>
          {level === 2
            ? "Bạn đã đạt TOPIK I cấp 2!"
            : level === 1
            ? "Bạn đã đạt TOPIK I cấp 2!"
            : "Bạn chưa đạt TOPIK I!"}
        </Text>

        <Spacer height={20} />
        <Text style={styles.text}>Điểm số của bạn là {scores}</Text>
        <Spacer height={20} />
        <Button onPress={onClose} title="Thoát" />
        <Spacer height={10} />
        <Button type="outlined" title="Xem đáp án" onPress={onViewSolution} />
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
    fontFamily: Font.BOLD,
  },
  image: {
    width: "90%",
    height: ScreenDimension.HEIGHT * 0.3,
    resizeMode: "contain",
  },
  incorrectText: {
    fontSize: 30,
    color: "red",
    fontFamily: Font.BOLD,
  },
  text: {
    fontFamily: Font.BOLD,
    fontSize: 24,
  },
})
