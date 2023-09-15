import { View, StyleSheet } from "react-native"
import React from "react"
import { Header, Screen, Spacer, Text } from "app/components"
import { colors } from "app/theme"
import Icon from "react-native-vector-icons/Ionicons"

export const GrammarScreen = () => {
  return (
    <Screen>
      <Header title="Ngữ pháp" />
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Icon name="caret-forward-outline" size={24} color={colors.palette.green800} />
          <Text style={styles.title}>입니다</Text>
          <Spacer width={10} />
          <Text style={styles.title}>là...</Text>
        </View>
        <Spacer height={10} />
        <View>
          <Text style={styles.content}>
            이다, gắn vào danh từ, có nghĩa tương đương trong tiếng Việt là 'là'. Hình thức kính ngữ
            của '이다' là '입니다', thường dùng trong câu trần thuật.
          </Text>
        </View>
        <Spacer height={10} />
        <View style={styles.exampleContainer}>
          <View style={styles.row}>
            <Text style={styles.example}>화입니다</Text>
            <Text style={styles.example}>Tôi là Hoa.</Text>
          </View>
        </View>
      </View>
    </Screen>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontFamily: "Jost-Bold",
    color: colors.palette.green800,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  exampleContainer: {
    backgroundColor: colors.palette.green300,
    padding: 10,
    borderRadius: 15,
  },
  content: {
    fontFamily: "Jost-SemiBold",
    textAlign: "justify",
  },
  example: {
    fontFamily: "Jost-SemiBold",
    color: colors.palette.green1000,
    flex: 1,
    marginHorizontal: 10,
  },
  row: {
    flexDirection: "row",
  },
})
