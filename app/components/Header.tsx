import { View, StyleSheet, TouchableOpacity } from "react-native"
import React from "react"
import Icon from "react-native-vector-icons/Ionicons"
import { colors } from "app/theme"
import { Text } from "./Text"
import { useNavigation } from "@react-navigation/native"

interface IHeader {
  onPress?(): void
  title?: string
}

export const Header = (props: IHeader) => {
  const { onPress, title } = props
  const navigation = useNavigation<any>()

  const onBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack()
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.back} onPress={onPress || onBack}>
        <Icon name="arrow-back-outline" size={32} color={colors.palette.black} />
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  back: {
    padding: 5,
    position: "absolute",
    left: 0,
  },
  text: {
    fontSize: 26,
    fontFamily: "NotoSerif_Condensed-Bold",
  },
})
