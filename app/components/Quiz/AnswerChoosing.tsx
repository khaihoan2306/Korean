import { View, StyleSheet, Image, TouchableOpacity } from "react-native"
import React from "react"
import { Text } from "../Text"
import { ScreenDimension } from "app/constants"
import { Spacer } from "../Spacer"
import { colors } from "app/theme"

interface IAnswerChoosing {
  image?: any
  answers?: any
  question?: string
  correctAnswer?: string
}

export const AnswerChoosing = (props: IAnswerChoosing) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hãy chọn đáp án đúng</Text>
      <Spacer height={30} />
      <View style={styles.question}>
        <Image
          source={{
            uri: "https://insidesmallbusiness.com.au/wp-content/uploads/2021/04/bigstock-Close-up-face-of-mature-busine-353046845-e1625116749968.jpg",
          }}
          style={styles.image}
        />
        <Spacer height={20} />
        <Text style={styles.questionText}>Viet Nam</Text>
      </View>
      <Spacer height={30} />
      <View style={styles.answer}>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Dap an 2 alsdlk</Text>
        </TouchableOpacity>
        <Spacer height={15} />
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Dap an 2 alsdlk</Text>
        </TouchableOpacity>
        <Spacer height={15} />
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Dap an 2 alsdlk</Text>
        </TouchableOpacity>
        <Spacer height={15} />
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Dap an 2 alsdlk</Text>
        </TouchableOpacity>
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
    padding: 10,
  },
  optionText: {
    color: colors.palette.secondaryGreen800,
    fontFamily: "Jost-SemiBold",
    fontSize: 18,
  },
})
