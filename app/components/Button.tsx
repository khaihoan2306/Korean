import { TouchableOpacity, StyleSheet, TouchableOpacityProps, TextStyle } from "react-native"
import React from "react"
import { Text } from "./Text"
import { colors } from "app/theme"

interface IButton extends TouchableOpacityProps {
  title?: string
  textStyle?: TextStyle
  type?: "fill" | "outlined"
}

export const Button = (props: IButton) => {
  const { title, style, textStyle, type } = props
  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, type === "outlined" && styles.outlined, style]}
    >
      <Text style={[styles.text, type === "outlined" && styles.outlinedText, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.button,
    paddingVertical: 10,
    borderRadius: 50,
  },
  text: {
    color: colors.palette.white,
    fontSize: 18,
  },
  outlined: {
    backgroundColor: colors.palette.white,
    borderWidth: 2,
    borderColor: colors.button,
  },
  outlinedText: {
    color: colors.palette.green1000,
  },
})
