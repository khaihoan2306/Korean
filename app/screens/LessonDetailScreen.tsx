import { View, StyleSheet } from "react-native"
import React, { useEffect } from "react"
import { Header, LessonOption, Screen, Spacer, Text } from "app/components"
import images from "assets/images"
import { useStores } from "app/models"

export const LessonDetailScreen = (props: any) => {
  const { navigation, route } = props
  const { title, lessonNumber } = route?.params
  const { lessonsStore } = useStores()

  useEffect(() => {
    lessonsStore.fetchLessons(`bai-${lessonNumber}`)
  }, [])

  const onVocabulary = () => {
    navigation.navigate("Vocabulary")
  }
  const onGrammar = () => {
    navigation.navigate("Grammar")
  }
  const onVocabularyReview = () => {
    navigation.navigate("VocabularyReview")
  }
  const onGrammarReview = () => {
    navigation.navigate("GrammarReview")
  }

  return (
    <Screen>
      <Header title={title} />
      <Spacer height={30} />
      <LessonOption image={images.alphabet} title="Từ vựng" onPress={onVocabulary} />
      <Spacer height={20} />
      <LessonOption image={images.grammar} title="Ngữ pháp" onPress={onGrammar} />
      <Spacer height={20} />
      <View style={styles.row}>
        <LessonOption image={images.practiceA} title="Luyện tập A" onPress={onVocabularyReview} />
        <LessonOption image={images.practiceB} title="Luyện tập B" onPress={onGrammarReview} />
      </View>
    </Screen>
  )
}
const styles = StyleSheet.create({
  container: {},
  row: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
})
