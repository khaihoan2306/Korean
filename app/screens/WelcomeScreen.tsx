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
    title: "Title 1",
    text: "Description.\nSay something cool",
    image: Images.slider1,
    backgroundColor: "#59b2ab",
  },
  {
    key: "two",
    title: "Title 2",
    text: "Other cool stuff",
    image: Images.slider2,
    backgroundColor: "#febe29",
  },
  {
    key: "three",
    title: "Rocket guy",
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: Images.slider3,
    backgroundColor: "#22bcb5",
  },
]

export const WelcomeScreen = () => {
  const navigation = useNavigation<any>()

  const onDone = () => {
    navigation.replace("Login")
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
  text: {},
  image: { width: "100%", resizeMode: "contain" },
})
