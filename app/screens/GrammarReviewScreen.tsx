import { View, StyleSheet } from "react-native"
import React from "react"
import { Text, Screen, Header } from "app/components"
import { AnswerInput } from "app/components/Quiz"

export const GrammarReviewScreen = () => {
  return (
    <Screen>
      <Header title="Ôn tập ngữ pháp" />
      <View style={styles.container}>
        <AnswerInput />
      </View>
    </Screen>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
})
