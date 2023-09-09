import { View, TouchableOpacity, StyleSheet } from "react-native"
import React, { useState } from "react"
import { Screen, Spacer, TextField, Button, Text } from "app/components"
import { colors } from "app/theme"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "app/models"

export const SignUpScreen = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()

  const navigation = useNavigation<any>()

  const {
    authenticationStore: { signUp },
  } = useStores()

  const onSignUp = async () => {
   const res = await signUp(email, password)
   if (res === "success") {
    
   }
  }

  const onLogin = () => {
    navigation.navigate("Login")
  }
  return (
    <Screen style={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.title}>Đăng ký</Text>
      <Spacer height={30} />
      <TextField
        placeholder="Nhập email"
        value={email}
        onChangeText={(text: any) => setEmail(text)}
      />
      <Spacer height={20} />
      <TextField
        placeholder="Nhập mật khẩu"
        value={password}
        onChangeText={(text: any) => setPassword(text)}
        secureTextEntry={true}
      />
      <Spacer height={20} />
      <TextField
        placeholder="Nhập lại mật khẩu"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={(text: any) => setConfirmPassword(text)}
      />

      <Spacer height={30} />
      <Button title="Đăng ký" onPress={onSignUp} />
      <Spacer height={20} />
      <View style={[styles.row, styles.center]}>
        <Text style={styles.grayText}>Đã có tài khoản?</Text>
        <Spacer width={4} />
        <TouchableOpacity onPress={onLogin}>
          <Text style={styles.forgotPassword}>Đăng nhập</Text>
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
    fontFamily: "Jost-SemiBold",
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
