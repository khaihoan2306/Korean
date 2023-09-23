import { View, StyleSheet, FlatList } from "react-native"
import React from "react"
import { Header, Screen, Spacer, Text } from "app/components"
import { colors } from "app/theme"
import Icon from "react-native-vector-icons/Ionicons"
import { useStores } from "app/models"
import { useSafeAreaInsetsStyle } from "app/utils/useSafeAreaInsetsStyle"

export const GrammarScreen = () => {
  const {
    lessonsStore: { grammarList },
  } = useStores()
  const containerInsets = useSafeAreaInsetsStyle(["top", "bottom"])

  const Grammar = (props: any) => {
    const { kTitle, vTitle, content, example } = props

    return (
      <>
        <View style={styles.titleContainer}>
          <Icon name="caret-forward-outline" size={24} color={colors.palette.green800} />
          <Text style={styles.title}>{kTitle}</Text>
          <Spacer width={10} />
          <Text style={styles.title}>{vTitle}</Text>
        </View>
        <Spacer height={10} />
        <View>
          <Text style={styles.content}>{content}</Text>
        </View>
        <Spacer height={20} />
        <View style={styles.exampleContainer}>
          <FlatList
            scrollEnabled={false}
            data={example}
            renderItem={({ item }) => {
              return (
                <View style={styles.row}>
                  <Text style={styles.example}>{item.korean}</Text>
                  <Text style={styles.example}>{item.vietnamese}</Text>
                </View>
              )
            }}
          />
        </View>
        <Spacer height={20} />
      </>
    )
  }

  return (
    <View style={containerInsets}>
      <Header title="Ngữ pháp" />
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.flatList}
          showsVerticalScrollIndicator={false}
          data={grammarList}
          renderItem={({ item }) => {
            return (
              <Grammar
                kTitle={item.kTitle}
                vTitle={item.vTitle}
                content={item.content}
                example={item.example}
              />
            )
          }}
        />
      </View>
    </View>
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
  flatList: {
    paddingBottom: 70,
  },
})
