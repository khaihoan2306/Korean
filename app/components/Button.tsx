import { TouchableOpacity, StyleSheet, TouchableOpacityProps } from "react-native"
import React from "react"
import { Text } from "./Text"
import { colors } from "app/theme"

interface IButton extends TouchableOpacityProps {
  title?: string
}

export const Button = (props: IButton) => {
  const { title, style } = props
  return (
    <TouchableOpacity {...props} style={[styles.container, style]}>
      <Text style={styles.text}>{title}</Text>
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
})
