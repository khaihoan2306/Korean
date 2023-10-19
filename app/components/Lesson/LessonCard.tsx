import { View, StyleSheet, TouchableOpacity } from "react-native"
import React from "react"
import { Text } from "../Text"
import { colors } from "app/theme"
import { Spacer } from "../Spacer"
import Image from "react-native-fast-image"

interface ILessonCard {
  title?: string
  image?: any
  subTitle?: string
  lessonNumber?: string
  onPress?(): void
}

export const LessonCard = (props: ILessonCard) => {
  const { title, image, subTitle, lessonNumber, onPress } = props

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        {lessonNumber && (
          <>
            <Spacer height={5} />
            <Text style={styles.subTitle}>{subTitle}</Text>
            <Text style={styles.lessonNumber}>{`Bài ${lessonNumber}`}</Text>
          </>
        )}
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 25,
    borderColor: colors.border,
  },
  image: {
    height: 150,
    width: 130,
    resizeMode: "cover",
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  textContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
  },
  title: {
    fontSize: 24,
    color: colors.palette.text3,
    fontFamily: "NotoSerif_Condensed-SemiBold",
  },
  subTitle: {
    color: colors.palette.text2,
    fontSize: 18,
  },
  lessonNumber: {
    flex: 1,
    textAlignVertical: "bottom",
    fontSize: 24,
  },
})
