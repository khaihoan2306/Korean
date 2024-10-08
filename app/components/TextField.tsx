import { View, TextInput, TextInputProps, StyleSheet } from "react-native"
import React from "react"
import { colors } from "app/theme"
import { Font } from "app/constants"

interface ITextField extends TextInputProps {
  style?: any
}

export const TextField = (props: ITextField) => {
  const { style } = props
  return <TextInput {...props} style={[styles.container, style]} />
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
    backgroundColor: colors.palette.gray,
    fontFamily: Font.REGULAR,
    fontSize: 16,
    color: colors.palette.dark400,
  },
})
