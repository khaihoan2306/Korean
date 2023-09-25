import { View, StyleSheet, Image, TouchableOpacity } from "react-native"
import React, { useState } from "react"
import { Text } from "../Text"
import { ScreenDimension } from "app/constants"
import { Spacer } from "../Spacer"
import { colors } from "app/theme"

interface IAnswerChoosing {
  answers?: any
  correctAnswer?: any
  onCorrect?(): void
  onIncorrect?(): void
}

export const AnswerChoosing = (props: IAnswerChoosing) => {
  const [isSelected, setIsSelected] = useState()
  const { correctAnswer, answers, onCorrect, onIncorrect } = props

  const onSelect = (e: any, index: any) => {
    setIsSelected(index)
    if (e.korean == correctAnswer.korean) {
      onCorrect()
      setIsSelected(undefined)
    } else {
      onIncorrect()
      setIsSelected(undefined)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hãy chọn đáp án đúng</Text>
      <Spacer height={30} />
      <View style={styles.question}>
        {correctAnswer?.image && (
          <Image
            source={{
              uri: correctAnswer?.image,
            }}
            style={styles.image}
          />
        )}
        <Spacer height={20} />
        <Text style={styles.questionText}>
          {correctAnswer?.image ? correctAnswer?.vietnamese : correctAnswer?.korean}
        </Text>
      </View>
      <Spacer height={30} />
      <View style={styles.answer}>
        {answers?.map((e, index) => {
          return (
            <View key={index}>
              <TouchableOpacity
                style={[
                  styles.option,
                  isSelected === index && (e == correctAnswer ? styles.correct : styles.incorrect),
                ]}
                onPress={() => onSelect(e, index)}
              >
                <Text style={[styles.optionText, isSelected === index && styles.selectedText]}>
                  {correctAnswer.image ? e.korean : e.vietnamese}
                </Text>
              </TouchableOpacity>
              <Spacer height={15} />
            </View>
          )
        })}
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
  },
  question: {
    width: "100%",
  },
  questionText: {
    fontFamily: "Jost-Bold",
    fontSize: 24,
    textAlign: "center",
  },
  image: {
    width: "auto",
    height: ScreenDimension.HEIGHT * 0.2,
    resizeMode: "contain",
  },
  answer: {
    width: "100%",
  },
  option: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: colors.palette.green600,
    alignItems: "center",
    padding: 10,
  },
  optionText: {
    color: colors.palette.secondaryGreen800,
    fontFamily: "Jost-SemiBold",
    fontSize: 18,
  },
  incorrect: {
    backgroundColor: "red",
    borderColor: "red",
  },
  correct: {
    backgroundColor: colors.palette.green600,
  },
  selectedText: {
    color: colors.palette.white,
  },
})
