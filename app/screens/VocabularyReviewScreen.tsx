import { View, StyleSheet } from "react-native"
import React from "react"
import { Header, Screen, Text } from "app/components"
import { AnswerChoosing } from "app/components/Quiz"

export const VocabularyReviewScreen = () => {
  return (
    <Screen>
      <Header />
      <View style={styles.container}>
        <AnswerChoosing />
      </View>
    </Screen>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
})
