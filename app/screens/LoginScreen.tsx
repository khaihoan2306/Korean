import { StyleSheet, TouchableOpacity, View } from "react-native"
import React, { useState } from "react"
import { Button, Screen, Spacer, Text, TextField } from "app/components"
import { colors } from "app/theme"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "app/models"

export const LoginScreen = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const navigation = useNavigation<any>()

  const {
    authenticationStore: { login },
  } = useStores()

  const onSignUp = () => {
    navigation.navigate("SignUp")
  }
  const onLogin = async () => {
    const res = await login(email, password)
    if (res === "success") {
      navigation.replace("TabBar")
    }
  }

  return (
    <Screen style={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.title}>Đăng nhập</Text>
      <Spacer height={30} />
      <TextField
        placeholder="Nhập email"
        value={email}
        onChangeText={(text: any) => setEmail(text)}
      />
      <Spacer height={20} />
      <TextField
        placeholder="Nhập mật khẩu"
        secureTextEntry={true}
        value={password}
        onChangeText={(text: any) => setPassword(text)}
      />
      <Spacer height={10} />
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Quên mật khẩu</Text>
      </TouchableOpacity>
      <Spacer height={20} />
      <Button title="Đăng nhập" onPress={onLogin} />
      <Spacer height={20} />
      <View style={[styles.row, styles.center]}>
        <Text style={styles.grayText}>Chưa có tài khoản?</Text>
        <Spacer width={4} />
        <TouchableOpacity onPress={onSignUp}>
          <Text style={styles.forgotPassword}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontFamily: "NotoSerif_Condensed-SemiBold",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  forgotPassword: {
    color: colors.palette.secondaryGreen500,
    alignSelf: "flex-end",
  },
  grayText: {
    color: colors.palette.gray67,
    alignSelf: "center",
  },
  row: {
    flexDirection: "row",
  },
})
