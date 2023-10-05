import { View, StyleSheet } from "react-native"
import React, { useEffect, useState } from "react"
import { Header, Screen, Text } from "app/components"
import { AnswerChoosing } from "app/components/Quiz"
import { useStores } from "app/models"
import { CorrectModal } from "app/components/Modal/CorrectModal"
import { AdEventType, InterstitialAd, TestIds } from "react-native-google-mobile-ads"

const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : "ca-app-pub-4650295610990607/2731360762"

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
})
export const VocabularyReviewScreen = () => {
  const {
    lessonsStore: { shuffleQuestions },
    lessonsStore,
  } = useStores()
  const [question, setQuestion] = useState(lessonsStore.question)
  const [isVisible, setIsVisible] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    shuffleQuestions()
    setQuestion(lessonsStore.question)
  }, [])
  useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
      setLoaded(true)
    })

    // Start loading the interstitial straight away
    interstitial.load()

    // Unsubscribe from events on unmount
    return unsubscribe
  }, [])

  return (
    <Screen>
      <Header title="Ôn tập từ vựng" />
      <View style={styles.container}>
        <AnswerChoosing
          answers={question?.answers}
          correctAnswer={question?.correctAnswer}
          onCorrect={() => {
            setIsCorrect(true)
            setIsVisible(true)
          }}
          onIncorrect={() => {
            setIsCorrect(false)
            setIsVisible(true)
          }}
        />
      </View>
      <CorrectModal
        correct={isCorrect}
        isVisible={isVisible}
        onPress={() => {
          setIsVisible(false)
          shuffleQuestions()
          setQuestion(lessonsStore.question)
          setIndex(index + 1)
          if (index === 4 && interstitial.loaded) interstitial.show()
        }}
        data={question?.correctAnswer}
      />
    </Screen>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
})
