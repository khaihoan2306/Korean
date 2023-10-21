import { Text as TText, TextProps, StyleSheet } from "react-native"
import React from "react"
import { colors } from "app/theme"
import { Font } from "app/constants"

interface IText extends TextProps {}

export const Text = (props: IText) => {
  const { children, style } = props

  return (
    <TText {...props} style={[styles.text, style]}>
      {children}
    </TText>
  )
}
const styles = StyleSheet.create({
  text: {
    color: colors.text,
    fontFamily: Font.MEDIUM,
    fontSize: 16,
  },
})
