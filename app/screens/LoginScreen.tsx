import { StyleSheet, TouchableOpacity } from "react-native"
import React from "react"
import { Button, Screen, Spacer, Text, TextField } from "app/components"
import { colors } from "app/theme"

export const LoginScreen = () => {
  return (
    <Screen style={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.title}>Đăng nhập</Text>
      <Spacer height={30} />
      <TextField placeholder="Nhập email" />
      <Spacer height={20} />
      <TextField placeholder="Nhập mật khẩu" secureTextEntry={true} />
      <Spacer height={10} />
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Quên mật khẩu</Text>
      </TouchableOpacity>
      <Spacer height={20} />
      <Button title="Đăng nhập" />
    </Screen>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontFamily: "Jost-SemiBold",
  },
  forgotPassword: {
    color: colors.palette.secondaryGreen500,
    alignSelf: "flex-end",
  },
})
