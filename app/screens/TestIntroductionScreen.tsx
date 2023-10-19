import { View, StyleSheet } from "react-native"
import React from "react"
import { Text, Screen, Header, Spacer, Button } from "app/components"
import { colors } from "app/theme"

export const TestIntroductionScreen = (props: any) => {
  const { navigation, route } = props
  const { topikNumber } = route?.params
  const onStart = () => {
    navigation.navigate("TopikTest", { topikNumber })
  }

  return (
    <Screen style={styles.container}>
      <Header title="Luyện thi TOPIK I" />
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          TOPIK – Test of Proficiency in Korean (한국어능력시험) là kỳ thi đánh giá khả năng sử dụng
          tiếng Hàn.
        </Text>
        <Spacer height={20} />
        <Text style={styles.text}>Phần nghe: 30 câu (40 phút)</Text>
        <Text style={styles.text}>Phần đọc: 40 câu (60 phút)</Text>
        <Spacer height={40} />
        <Button title="BẮT ĐẦU" textStyle={styles.buttonText} onPress={onStart} />
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    color: colors.palette.black,
  },
  buttonText: {
    fontSize: 24,
    fontFamily: "NotoSerif_Condensed-ExtraBold",
  },
})
