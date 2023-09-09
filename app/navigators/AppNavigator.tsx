/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  NavigatorScreenParams, // @demo remove-current-line
} from "@react-navigation/native"
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack"
import { observer } from "mobx-react-lite"
import React, { useEffect, useState } from "react"
import { useColorScheme } from "react-native"
import * as Screens from "app/screens"
import Config from "../config"
import { useStores } from "../models" // @demo remove-current-line
import { navigationRef, useBackButtonHandler } from "./navigationUtilities"
import { colors } from "app/theme"
import { loadString, saveString } from "app/utils/storage"
import * as Constant from "app/constants"
import { TabBar } from "./TabNavigator"

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 *   https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type AppStackParamList = {
  Welcome: undefined
  Login: undefined
  SignUp: undefined
  TabBar: undefined
  LessonDetail: undefined
  Vocabulary: undefined
}

/**
 * This is a list of all the route names that will exit the app if the back button
 * is pressed while in that screen. Only affects Android.
 */
const exitRoutes = Config.exitRoutes

export type AppStackScreenProps<T extends keyof AppStackParamList> = NativeStackScreenProps<
  AppStackParamList,
  T
>

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<AppStackParamList>()

const AppStack = observer(function AppStack() {
  // @demo remove-block-start
  const {
    authenticationStore: { isAuthenticated },
  } = useStores()
  const [isFirstTime, setIsFirstTime] = useState(undefined)
  useEffect(() => {
    const checkIsFirstTime = async () => {
      const isFirstTime = await loadString(Constant.IS_FIRST_TIME)
      if (isFirstTime) {
        setIsFirstTime(false)
      } else {
        await saveString(Constant.IS_FIRST_TIME, "false")
        setIsFirstTime(true)
      }
    }
    checkIsFirstTime()
  }, [])

  // @demo remove-block-end
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={isFirstTime ? "Welcome" : isAuthenticated ? "TabBar" : "Login"}
    >
      <Stack.Screen name="Welcome" component={Screens.WelcomeScreen} />
      <Stack.Screen name="Login" component={Screens.LoginScreen} />
      <Stack.Screen name="SignUp" component={Screens.SignUpScreen} />
      <Stack.Screen name="TabBar" component={TabBar} />
      <Stack.Screen name="LessonDetail" component={Screens.LessonDetailScreen} />
      <Stack.Screen name="Vocabulary" component={Screens.VocabularyScreen} />
    </Stack.Navigator>
  )
})

export interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = observer(function AppNavigator(props: NavigationProps) {
  const colorScheme = useColorScheme()

  useBackButtonHandler((routeName) => exitRoutes.includes(routeName))

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      <AppStack />
    </NavigationContainer>
  )
})
