import { View, StyleSheet } from "react-native"
import React, { useState } from "react"
import { Text } from "../Text"
import { TextField } from "../TextField"
import { colors } from "app/theme"
import { Spacer } from "../Spacer"
import { Button } from "../Button"
import { useStores } from "app/models"

export const AnswerInput = () => {
  const [index, setIndex] = useState(0)
  const [isShownAnswer, setIsShownAnswer] = useState(false)
  const {
    lessonsStore: { practiceList },
  } = useStores()

  const onShowAnswer = () => {
    if (!isShownAnswer) {
      setIsShownAnswer(true)
    } else {
      setIsShownAnswer(false)
      setIndex(index + 1 < practiceList?.length ? index + 1 : 0)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.description}>Dịch câu sau sang tiếng Hàn</Text>
      <Spacer height={50} />
      <Text style={styles.question}>{practiceList[index]?.vietnamese}</Text>
      <Spacer height={20} />
      {isShownAnswer && (
        <>
          <Text style={styles.answer}>{practiceList[index]?.korean}</Text>
          <Spacer height={30} />
        </>
      )}
      <TextField style={styles.textInput} multiline={true} />
      <Spacer height={30} />
      <Button title={isShownAnswer ? "Tiếp theo" : "Xác nhận"} onPress={onShowAnswer} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
  },
  description: {
    fontSize: 24,
  },
  textInput: {
    fontFamily: "Jost-SemiBold",
    fontSize: 24,
    borderRadius: 10,
    color: colors.palette.green900,
    textAlignVertical: "top",
    minHeight: "30%",
  },
  question: {
    fontFamily: "Jost-Bold",
    fontSize: 28,
    color: colors.palette.green900,
  },

  answer: {
    fontFamily: "Jost-Bold",
    fontSize: 28,
    color: colors.palette.white,
    backgroundColor: colors.palette.green800,
    padding: 10,
    width: "100%",
    textAlign: "center",
    borderRadius: 10,
  },
})
