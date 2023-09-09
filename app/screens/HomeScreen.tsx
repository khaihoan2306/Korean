import { View, StyleSheet, TouchableOpacity, ScrollView, FlatList } from "react-native"
import React, { useEffect, useState } from "react"
import { Button, LessonCard, Screen, Spacer, Text } from "app/components"
import { colors } from "app/theme"
import Icon from "react-native-vector-icons/Ionicons"
import { useNavigation } from "@react-navigation/native"
import { lessonList } from "app/constants"

export const HomeScreen = () => {
  const [subject, setSubject] = useState(0)
  const [selectedList, setSelectedList] = useState([])
  const navigation = useNavigation<any>()

  const buttonArray = [0, 1, 2]

  useEffect(() => {
    const tmpList = lessonList.filter((e, index) => Math.floor(index / 5) == subject)
    setSelectedList(tmpList)
  }, [subject])

  const onLessonDetail = ({ title }) => {
    navigation.navigate("LessonDetail", { title })
  }

  const renderButton = (key: number) => {
    let title: string
    switch (key) {
      case 0:
        title = "Bài 1 - 5"
        break
      case 1:
        title = "Bài 6 - 10"
        break
      case 2:
        title = "Bài 11 - 15"
        break
      default:
        title = "Bài 1 - 5"
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
    <Screen>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon
            name="notifications-outline"
            color={colors.palette.white}
            size={30}
            style={styles.notification}
          />
        </TouchableOpacity>
        <Spacer height={10} />
        <Text style={styles.welcomeText}>Tiếng Hàn sơ cấp cho người mới bắt đầu!</Text>
        <Spacer height={20} />
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
        <Spacer height={10} />
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>Danh sách</Text>
        <Spacer height={10} />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={selectedList}
          renderItem={({ item }) => (
            <>
              <LessonCard
                title={item.vietnameseTitle}
                subTitle={item.koreanTitle}
                image={item.image}
                lessonNumber={`Bài ${item.lessonNumber}`}
                onPress={() => onLessonDetail({ title: item.vietnameseTitle })}
              />
              <Spacer height={20} />
            </>
          )}
          ListFooterComponent={<Spacer height={500} />}
        />
      </View>
    </Screen>
  )
}
const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: "Jost-SemiBold",
    color: colors.palette.text1,
  },
  header: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    backgroundColor: colors.palette.secondaryGreen500,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  welcomeText: {
    fontSize: 24,
    fontFamily: "Jost-SemiBold",
    color: colors.palette.secondaryGreen100,
  },
  notification: {
    alignSelf: "flex-end",
  },
  level: {
    flexDirection: "row",
    width: "100%",
  },
  horizontalScrollViewContent: {
    paddingLeft: 24,
  },
  horizontalScrollView: {
    marginHorizontal: -24,
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
