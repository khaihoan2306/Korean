import { View, TextInput, TextInputProps, StyleSheet } from "react-native"
import React from "react"
import { colors } from "app/theme"

interface ITextField extends TextInputProps {}

export const TextField = (props: ITextField) => {
  return <TextInput {...props} style={styles.container} />
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
    backgroundColor: colors.palette.gray,
    fontFamily: "Jost-Regular",
    fontSize: 16,
    color: colors.palette.dark400,
  },
})
