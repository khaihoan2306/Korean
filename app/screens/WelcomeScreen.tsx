import { View, StyleSheet, Image } from "react-native"
import React from "react"
import { Text, Screen, Button } from "app/components"
import Images from "../../assets/images"
import AppIntroSlider from "react-native-app-intro-slider"
import { colors } from "app/theme"
import { useNavigation } from "@react-navigation/native"

const slides = [
  {
    key: "one",
    //title: "Title 1",
    text: "Nội dung dựa trên Giáo trình tiếng Hàn tổng hợp dành cho người Việt Nam",
    image: Images.slider1,
  },
  {
    key: "two",
    //title: "Title 2",
    text: "Phù hợp với những người bắt đầu làm quen với tiếng Hàn",
    image: Images.slider2,
  },
  {
    key: "three",
    // title: "Rocket guy",
    text: "Hãy luyện tập mỗi ngày để trở nên thành thạo trong giao tiếp",
    image: Images.slider3,
  },
]

export const WelcomeScreen = () => {
  const navigation = useNavigation<any>()

  const onDone = () => {
    navigation.replace("Home")
  }

  const renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    )
  }

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      activeDotStyle={{ backgroundColor: colors.palette.secondaryGreen500 }}
      showDoneButton={true}
      showNextButton={false}
      onDone={onDone}
      renderDoneButton={() => {
        return <Button disabled={true} style={{ paddingHorizontal: 18 }} title="Xong" />
      }}
    />
  )
}
const styles = StyleSheet.create({
  container: { alignItems: "center", justifyContent: "center", padding: 24 },
  title: {},
  text: {
    fontSize: 24,
    textAlign: "justify",
  },
  image: { width: "100%", resizeMode: "contain" },
})
