import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import * as Screens from "../screens"
import Icon from "react-native-vector-icons/Ionicons"
import { colors } from "app/theme"

const Tab = createBottomTabNavigator()

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true })
          }
        }
        let iconName: string
        switch (route.name) {
          case "Home":
            iconName = "home"
            break
          case "Courses":
            iconName = "book"
            break
          case "Review":
            iconName = "color-wand"
            break
          case "Settings":
            iconName = "person"
            break
          default:
            iconName = "home"
            break
        }

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          })
        }

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.option}
          >
            <Icon
              name={isFocused ? iconName : `${iconName}-outline`}
              color={colors.palette.green800}
              size={24}
            />
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",

    height: 50,
  },
  option: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})

export const TabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={Screens.HomeScreen} />
      <Tab.Screen name="Courses" component={Screens.HomeScreen} />
      <Tab.Screen name="Review" component={Screens.HomeScreen} />
      <Tab.Screen name="Settings" component={Screens.HomeScreen} />
    </Tab.Navigator>
  )
}
