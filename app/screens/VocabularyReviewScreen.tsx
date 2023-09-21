import { View, StyleSheet } from "react-native"
import React, { useEffect, useState } from "react"
import { Header, Screen, Text } from "app/components"
import { AnswerChoosing } from "app/components/Quiz"
import { useStores } from "app/models"
import { CorrectModal } from "app/components/Modal/CorrectModal"

export const VocabularyReviewScreen = () => {
  const {
    lessonsStore: { shuffleQuestions },
    lessonsStore,
  } = useStores()
  const [question, setQuestion] = useState(lessonsStore.question)
  const [isVisible, setIsVisible] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  useEffect(() => {
    shuffleQuestions()
  }, [])

  return (
    <Screen>
      <Header />
      <View style={styles.container}>
        <AnswerChoosing
          answers={question.answers}
          correctAnswer={question.correctAnswer}
          onCorrect={() => {
            setIsCorrect(true)
            setIsVisible(true)
          }}
          onIncorrect={() => {
            setIsCorrect(false)
            setIsVisible(true)
          }}
        />
      </View>
      <CorrectModal
        correct={isCorrect}
        isVisible={isVisible}
        onPress={() => {
          setIsVisible(false)
          shuffleQuestions()
          setQuestion(lessonsStore.question)
        }}
        data={question.correctAnswer}
      />
    </Screen>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
})
