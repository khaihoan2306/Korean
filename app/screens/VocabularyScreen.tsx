import { ScrollView, View, StyleSheet, FlatList } from "react-native"
import React, { useCallback, useState } from "react"
import { Button, FlashCard, Header, Screen, Spacer, Text } from "app/components"
import { colors } from "app/theme"
import { useStores } from "app/models"

export const VocabularyScreen = () => {
  const {
    lessonsStore: { vocabularyList },
  } = useStores()
  const [subject, setSubject] = useState(0)

  const buttonArray = vocabularyList
  const renderButton = (e: any, index: any) => {
    const onPress = (i: number) => {
      setSubject(i)

      console.log(vocabularyList[i])
    }

    return (
      <Button
        key={index}
        title={e.vTitle}
        style={index === subject ? styles.activeLevelOptionButton : styles.levelOptionButton}
        textStyle={
          index === subject ? styles.activeLevelOptionButtonText : styles.levelOptionButtonText
        }
        onPress={() => onPress(index)}
      />
    )
  }

  return (
    <Screen style={{ flex: 1 }}>
      <Header title="Từ vựng" />
      <Spacer height={20} />
      <View style={styles.body}>
        <ScrollView
          contentContainerStyle={styles.horizontalScrollViewContent}
          style={styles.horizontalScrollView}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.level}>
            {buttonArray.map((e, index) => {
              return renderButton(e, index)
            })}
          </View>
        </ScrollView>
        <Spacer height={20} />

        <FlatList
          horizontal
          style={styles.horizontalScrollView}
          contentContainerStyle={styles.horizontalScrollViewContent}
          showsHorizontalScrollIndicator={false}
          data={vocabularyList[subject].content}
          renderItem={({ item }) => (
            <FlashCard image={item.image} vietnamese={item.vietnamese} korean={item.korean} />
          )}
        />
      </View>
    </Screen>
  )
}
const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 24,
  },
  level: {
    flexDirection: "row",
    width: "100%",
  },
  horizontalScrollViewContent: {
    paddingHorizontal: 24,
  },
  horizontalScrollView: {
    marginHorizontal: -24,
    paddingVertical: 10,
  },
  levelOptionButton: {
    backgroundColor: colors.palette.green2,
    borderRadius: 16,
    paddingHorizontal: 16,
    width: "auto",
    marginRight: 10,
  },
  levelOptionButtonText: {
    color: colors.palette.secondaryGreen300,
  },
  activeLevelOptionButton: {
    backgroundColor: colors.palette.green400,
    borderRadius: 16,
    paddingHorizontal: 16,
    width: "auto",
    marginRight: 10,
  },
  activeLevelOptionButtonText: {
    color: colors.palette.green100,
  },
})
