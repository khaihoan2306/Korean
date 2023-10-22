import { View, StyleSheet, TouchableOpacity, ScrollView, FlatList } from "react-native"
import React, { useEffect, useState } from "react"
import { Button, LessonCard, Screen, Spacer, Text } from "app/components"
import { colors } from "app/theme"
import Icon from "react-native-vector-icons/Ionicons"
import { useNavigation } from "@react-navigation/native"
import { Font, lessonList } from "app/constants"
import firestore from "@react-native-firebase/firestore"
import { BannerAd, BannerAdSize, TestIds } from "react-native-google-mobile-ads"
import * as bai from "app/constants/data"

const adUnitId = __DEV__ ? TestIds.BANNER : "ca-app-pub-4650295610990607/2368592207"

export const HomeScreen = () => {
  const [subject, setSubject] = useState(0)
  const [selectedList, setSelectedList] = useState([])
  const navigation = useNavigation<any>()

  const buttonArray = [0, 1, 2]

  useEffect(() => {
    const soCap1List = lessonList.filter((e, index) => index < 15)
    const socap2List = []
    const topikList = lessonList.filter((e, index) => index === 15)
    let selected: any
    switch (subject) {
      case 0:
        selected = soCap1List
        break
      case 1:
        selected = socap2List
        break
      case 2:
        selected = topikList
        break
      default:
        selected = soCap1List
    }
    setSelectedList(selected)
  }, [subject])

  const onLessonDetail = ({ title, lessonNumber }) => {
    navigation.navigate("LessonDetail", { title, lessonNumber })
  }
  const onTopikTest = ({ topikNumber }) => {
    navigation.navigate("TestIntroduction", { topikNumber })
  }

  const onSendData = () => {
    firestore()
      .collection("topik")
      .doc("topik-35")
      .update(bai.topik35)
      .then(() => {
        console.log("User added!")
      })
  }

  const renderButton = (key: number) => {
    let title: string
    switch (key) {
      case 0:
        title = "Sơ cấp 1"
        break
      case 1:
        title = "Sơ cấp 2"
        break
      case 2:
        title = "Luyện thi TOPIK I"
        break
      default:
        title = "Sơ cấp 1"
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
        {/* <TouchableOpacity onPress={onSendData}>
          <Icon
            name="notifications-outline"
            color={colors.palette.white}
            size={30}
            style={styles.notification}
          />
        </TouchableOpacity> */}
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
        <View style={styles.bannerAd}>
          <BannerAd
            unitId={adUnitId}
            size={BannerAdSize.BANNER}
            requestOptions={{
              requestNonPersonalizedAdsOnly: true,
            }}
          />
        </View>
        <Spacer height={10} />
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
                lessonNumber={item.lessonNumber}
                onPress={() =>
                  subject === 2
                    ? onTopikTest({ topikNumber: item.topikNumber })
                    : onLessonDetail({
                        title: item.vietnameseTitle,
                        lessonNumber: item.lessonNumber,
                      })
                }
              />
              <Spacer height={20} />
            </>
          )}
          ListFooterComponent={<Spacer height={600} />}
          ListEmptyComponent={<Text>Dữ liệu chưa được cập nhật</Text>}
        />
      </View>
    </Screen>
  )
}
const styles = StyleSheet.create({
  bannerAd: {
    alignItems: "center",
  },
  body: {
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: Font.SEMIBOLD,
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
    fontFamily: Font.SEMIBOLD,
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
