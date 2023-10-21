import { StyleSheet, View } from "react-native"
import React, { useEffect, useState } from "react"
import { Header, TestingSection } from "app/components"
import TrackPlayer from "react-native-track-player"
import { useStores } from "app/models"
import { colors } from "app/theme"
import { useSafeAreaInsetsStyle } from "app/utils/useSafeAreaInsetsStyle"

export const TopikTestScreen = (props: any) => {
  const { navigation, route } = props
  const { topikNumber } = route?.params
  const $containerStyle = useSafeAreaInsetsStyle(["top", "bottom"])
  const [title, setTitle] = useState("Phần nghe (1 - 30)")

  const {
    topikTestStore: { listening },
  } = useStores()

  const track = {
    url: listening,
  }
  const onBack = async () => {
    TrackPlayer.reset()
    navigation.goBack()
  }
  const initialize = async () => {
    await TrackPlayer.add([track])
    TrackPlayer.play()
  }
  useEffect(() => {
    initialize()
  }, [])

  return (
    <View style={[styles.container, $containerStyle]}>
      <Header title={title} onPress={onBack} />
      <TestingSection setTitle={setTitle} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
})
