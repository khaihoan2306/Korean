import { StyleSheet, View } from "react-native"
import React, { useEffect, useState } from "react"
import { Header, Screen, Text } from "app/components"
import TrackPlayer from "react-native-track-player"
import { useStores } from "app/models"

export const TopikTestScreen = (props: any) => {
  const { route } = props
  const { topikNumber } = route?.params
  const [title, setTitle] = useState("Phần nghe")

  const {
    topikTestStore: { fetchTopikTest, questionList, sectionList },
  } = useStores()

  const track = {
    url: "https://firebasestorage.googleapis.com/v0/b/korean-b640f.appspot.com/o/topik%2Ftopik-35%2FTopik%20I_35.mp3?alt=media&token=98d3b30b-a990-4281-b440-1055ded16e20&_gl=1*bj2k99*_ga*MjA2MjczMzc0NC4xNjkwNzI3NDk2*_ga_CW55HF8NVT*MTY5NzY5ODU1My4zMy4xLjE2OTc2OTk0NjkuNjAuMC4w",
  }
  const init = async () => {
    await TrackPlayer.add([track])
    await fetchTopikTest(topikNumber)
    console.log(questionList)
    console.log(sectionList)
    TrackPlayer.play()
  }
  useEffect(() => {
    init()
  }, [])

  return (
    <Screen style={styles.container}>
      <Header title={title} />
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
