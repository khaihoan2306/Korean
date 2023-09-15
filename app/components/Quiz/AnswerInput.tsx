import { View, StyleSheet } from "react-native"
import React from "react"
import { Text } from "../Text"
import { TextField } from "../TextField"
import { colors } from "app/theme"

export const AnswerInput = () => {
  return (
    <View>
      <TextField style={styles.textInput} multiline={true} />
    </View>
  )
}
const styles = StyleSheet.create({
  textInput: {
    fontFamily: "Jost-SemiBold",
    fontSize: 24,
    borderRadius: 10,
    backgroundColor: colors.palette.green700,
    color: colors.palette.white,
  },
})
