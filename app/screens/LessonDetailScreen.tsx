import { View, StyleSheet } from "react-native"
import React from "react"
import { Header, LessonOption, Screen, Spacer, Text } from "app/components"
import images from "assets/images"

export const LessonDetailScreen = (props: any) => {
  const { navigation, route } = props
  const title = route?.params?.title

  const onVocabulary = () => {
    navigation.navigate("Vocabulary")
  }

  return (
    <Screen>
      <Header title={title} />
      <Spacer height={30} />
      <LessonOption image={images.alphabet} title="Từ vựng" onPress={onVocabulary} />
      <Spacer height={20} />
      <LessonOption image={images.grammar} title="Ngữ pháp" />
      <Spacer height={20} />
      <View style={styles.row}>
        <LessonOption image={images.practiceA} title="Luyện tập A" />
        <LessonOption image={images.practiceB} title="Luyện tập B" />
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
