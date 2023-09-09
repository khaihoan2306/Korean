import { ScrollView, View, StyleSheet, FlatList } from "react-native"
import React, { useState } from "react"
import { Button, FlashCard, Header, Screen, Spacer, Text } from "app/components"
import { colors } from "app/theme"

export const VocabularyScreen = () => {
  const [subject, setSubject] = useState(0)
  const [selectedList, setSelectedList] = useState([0, 1, 2, 3, 4])
  const buttonArray = [0, 1, 2]
  const renderButton = (key: number) => {
    let title: string
    switch (key) {
      case 0:
        title = "Quốc gia"
        break
      case 1:
        title = "Nghề nghiệp"
        break
      case 2:
        title = "Lời chào"
        break
    }
    const onPress = () => {
      setSubject(key)
    }

    return (
      <Button
        key={key}
        title={title}
        style={key === subject ? styles.activeLevelOptionButton : styles.levelOptionButton}
        textStyle={
          key === subject ? styles.activeLevelOptionButtonText : styles.levelOptionButtonText
        }
        onPress={onPress}
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
            {buttonArray.map((e) => {
              return renderButton(e)
            })}
          </View>
        </ScrollView>
        <Spacer height={20} />

        <FlatList
          horizontal
          style={styles.horizontalScrollView}
          contentContainerStyle={styles.horizontalScrollViewContent}
          showsHorizontalScrollIndicator={false}
          data={selectedList}
          renderItem={({ item }) => <FlashCard />}
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
