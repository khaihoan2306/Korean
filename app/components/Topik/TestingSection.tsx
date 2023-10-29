import { Image, StyleSheet, View } from "react-native"
import { Text } from "../Text"
import React, { useEffect, useMemo, useState } from "react"
import { useStores } from "app/models"
import { Font, ScreenDimension } from "app/constants"
import RadioGroup, { RadioButton } from "react-native-radio-buttons-group"
import { colors } from "app/theme"
import { Spacer } from "../Spacer"
import { Button } from "../Button"
import { observer } from "mobx-react-lite"
import { TopikResultModal } from "../Modal/TopikResultModal"
import { ScrollView } from "react-native-gesture-handler"
import TrackPlayer from "react-native-track-player"
import { useNavigation } from "@react-navigation/native"
import { AdEventType, InterstitialAd, TestIds } from "react-native-google-mobile-ads"

const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : "ca-app-pub-4650295610990607/7538437067"

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
})

export const TestingSection = observer((props: any) => {
  const { setTitle } = props
  const {
    topikTestStore: { sectionList, questionList, answerList, setAnswer, checkAnswer },
  } = useStores()
  const [index, setIndex] = useState(0)
  const [selectedId, setSelectedId] = useState("")
  const [exampleAnswers, setExampleAnswers] = useState([])
  const [questions, setQuestions] = useState([])
  const [content, setContent] = useState()
  const [image, setImage] = useState()
  const [isVisible, setIsVisible] = useState(false)
  const [isLoaded, setLoaded] = useState(false)
  const [isShowExplain, setIsShowExplain] = useState(false)
  const navigation = useNavigation<any>()

  useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
      setLoaded(true)
    })
    interstitial.load()
    // Unsubscribe from events on unmount
    return unsubscribe
  }, [])
  useEffect(() => {
    const tmpExample = []
    const tmpQuestions = []
    const fromId = sectionList[index].fromQuestion
    const toId = sectionList[index].toQuestion
    const content = sectionList[index].content
    const image = sectionList[index].image

    sectionList[index].answers?.map((e) => {
      tmpExample.push({
        id: e.key,
        label: e.value,
        value: e.value,
        labelStyle: { color: colors.text },
      })
    })
    questionList.map((e) => {
      if (e.id >= fromId && e.id <= toId) tmpQuestions.push(e)
    })
    setContent(content)
    setImage(image)
    setExampleAnswers(tmpExample)
    setQuestions(tmpQuestions)
    setSelectedId(sectionList[index].correctAnswer)
    if (fromId >= 31) {
      setTitle("Phần đọc (31-70)")
      TrackPlayer.reset()
    } else setTitle("Phần nghe (1-30)")
  }, [index])
  const radioButtons = useMemo(() => exampleAnswers, [exampleAnswers])

  const renderQuestion = ({ title, answers, id, content, image, explain }) => {
    const tmp = []
    answers.map((e) => {
      tmp.push({
        id: e.key,
        label: e.value,
        value: e.value,
        image: e.image,
        labelStyle: { color: colors.text },
      })
    })
    const onSelect = (e) => {
      setAnswer(id, e.toString())
    }

    return (
      <View key={id}>
        <Text style={styles.content}>{`${id}.   ${title ?? ""}`}</Text>
        {image && <Image source={{ uri: image }} style={styles.image} />}
        {content && (
          <>
            <Spacer height={10} />
            <View style={styles.exampleContainer}>
              <Text style={styles.content}>{content}</Text>
            </View>
            <Spacer height={10} />
          </>
        )}
        {tmp[0]?.image ? (
          tmp.map((e, index) => {
            return (
              <>
                <RadioButton
                  id={e.id}
                  key={e.id}
                  selected={e.id === answerList[id - 1].value}
                  onPress={() => onSelect(e.id)}
                />
                <Image source={{ uri: tmp[index].image }} style={styles.image} />
              </>
            )
          })
        ) : (
          <RadioGroup
            containerStyle={{ alignItems: "flex-start" }}
            radioButtons={tmp}
            onPress={onSelect}
            selectedId={answerList[id - 1].value}
          />
        )}
        <Spacer height={10} />
        {isShowExplain && explain && (
          <View style={styles.explainContainer}>
            <Text style={styles.explainText}>{explain}</Text>
          </View>
        )}
      </View>
    )
  }
  const onNext = () => {
    index < sectionList.length - 1 && setIndex(index + 1)
    if (index === sectionList.length - 1) {
      if (!isShowExplain) {
        interstitial.show()
        checkAnswer()
        setIsVisible(true)
      }
    }
  }
  const onPrevious = () => {
    index > 0 && setIndex(index - 1)
  }
  const onClose = () => {
    setIsVisible(false)
    navigation.navigate("Home")
  }
  const onViewSolution = () => {
    setIsVisible(false)
    setIsShowExplain(true)
    setIndex(0)
  }

  return (
    <View>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        decelerationRate="normal"
      >
        <Text style={styles.title}>{sectionList[index].title}</Text>
        {image && <Image source={{ uri: image }} style={styles.image} />}
        {exampleAnswers?.length > 0 ? (
          <>
            <Spacer height={20} />
            <View style={styles.exampleContainer}>
              <Text style={styles.exampleLabel}>&lt; 보 기 &gt;</Text>
              <Text style={styles.content}>{sectionList[index].content}</Text>
              <RadioGroup
                containerStyle={{ alignItems: "flex-start" }}
                radioButtons={radioButtons}
                selectedId={selectedId}
              />
            </View>
          </>
        ) : (
          content &&
          sectionList[index].fromQuestion > 30 && (
            <>
              <Spacer height={20} />
              <View style={styles.exampleContainer}>
                <Text style={styles.content}>{sectionList[index].content}</Text>
              </View>
            </>
          )
        )}
        <Spacer height={20} />
        {questions.map((e) => {
          return renderQuestion(e)
        })}
        <Spacer height={150} />
      </ScrollView>
      <View style={styles.buttonContainer}>
        {index > 0 && <Button style={styles.button} title="Trước" onPress={onPrevious} />}
        <Button
          style={styles.button}
          title={index === sectionList.length - 1 ? "Nộp bài" : "Tiếp theo"}
          onPress={onNext}
        />
      </View>
      <TopikResultModal isVisible={isVisible} onPress={onClose} onViewSolution={onViewSolution} />
    </View>
  )
})
const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  title: {
    fontFamily: Font.BOLD,
    fontSize: 18,
  },
  exampleContainer: {
    borderWidth: 1,
    paddingVertical: 5,
  },
  exampleLabel: {
    position: "absolute",
    top: -12,
    alignSelf: "center",
    backgroundColor: colors.palette.white,
    paddingHorizontal: 6,
  },
  content: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  button: {
    maxWidth: "40%",
  },
  buttonContainer: {
    position: "absolute",
    top: 0.8 * ScreenDimension.HEIGHT,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  explainContainer: {
    backgroundColor: colors.palette.green600,
    borderRadius: 10,
    padding: 14,
  },
  explainText: {
    color: colors.palette.white,
  },
})
