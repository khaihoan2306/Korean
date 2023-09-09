import { View, StyleSheet, TouchableOpacity, Image } from "react-native"
import React from "react"
import { Text } from "../Text"
import { colors } from "app/theme"
import { ScreenDimension } from "app/constants"
import { Spacer } from "../Spacer"

interface IFlashCard {
  korean?: string
  vietnamese?: string
  image?: any
}

export const FlashCard = (props: IFlashCard) => {
  return (
    <TouchableOpacity style={styles.container}>
      {/* <Image
        style={styles.image}
        source={{
          uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAh1BMVEXaJR3//wDZEx7qlxTXAB7ZHR3aIB3//QDzxg7pkBXZGB3YCx7rmxTqlhTbKB320wz1zg3iZBnwtxD99wPhXRn88QXiaRj54gntpxLjcBjkdhf65gjcMxzurBL76wfsohP43AroihXnhBbmfhfvshHgVRrfTRvyvw/dPBv10AzzyA7wthHeSBszN/CXAAAEGElEQVR4nO3d6XaiQBAFYLst2hHc17jFJTFxEt//+UZEkIYGcZmjVN/v98wcqPE22FRJpQIAAAAAAAAAAAAAAAAAAAAAAAAAZ61nH8DroT/07EN4NWondurZB/FiZEM05LMP4sXQWIwRHo2aCyHmCE+cbB5q0kR44mh1qMkK4YlRLeFrITxnsn6sSR3hOTtGR4g2whNRSgQUwhOS61NN1ghPiNqnmiA8EVeE3GcfyqtwN1FNNihKgDpRTToIT8ATZ96zD+Y1uB+xmnwgPD76idXkB+HxkYhDTQ7cqVaTKcLjb05rNcFWdSUZHYTnwJ0kajJBeOg7UZNvfFColqhJzfqaOCORNHKefVBP5iWjcwiP7ff3qeggPE43VRIhunaHx+sZatKzOzzUN9Skb3V4nIGhJEIMbA6P92msyafN4aGhsSZDi8PjbI0lEWLLMDyOLIQWGTVZULF/oESlcybLahF1c3QO4akX+vvLaYmK4ppuOx6vV6ptBRql79kfblSypdh12pdP6i5tVboH7oqa/7UkVSpjX4b3lbWE3m/4VbLchJzUvuKjfFOJLjgJNL18fjf4KOmHJCDn44dXZDwv3eKqU/T24JK8lXJx1dHAtEdyq9qg1LkJubJz+VwL+uuW6tY1m6L1g0pSZ5CbkLd7f0BFhntWe00O3f+tsFfimxIzSj4rv9aExeKqk63VHRVZtUp+U2KmqHFzSZaMFlcdbW+7VelvGeYm5Hh/Llcg5cfjtrjqaHO5Bgkbxh+SgJzPrqrIbMdycdWpzCcYJp9sF1cddYsutf2ybUPfjoqutBY1y3qXq3HC6gtOHm0QI581YxraIEY+a8Y0kt3keSypiXvNZr4lYxqFrzo+S64810THkvCkBjHyWTGmceUDUyvGNAzd5Hls6DQ3DGLks2BMw9hNnseCTvMro2NDp7lxEOMoc+llP6bh/ZpPfLilrLamX+7hMQ5iHG5XPafiZNzgcg9PxiDGaRuazJsIzMc0jIMYs6jxyLyBzXxMwzSIsYhtQxs3sHmPaRgGMWpd/Yypm75YcxzTiHipT0E71XjkuqkO7AXn8KSi0zQ8vlFUtyg8ap8414zGI2+fqN2e74MvqfeFZndDJzuw3/g+HyWtq22alwi9A/udbXi06IwvNB7JVrwDm2145PJ8kpcbjxTF/zjX8FB0k1qs8SjW1jRjGh61C8+wI4ttPLte1IHN9IUAMmzxWxf/T486sJm+EICCRfN9d81dadiBzfOFAMef9Rfi98rGI0XBV2mWLwSQVf/Ubmg8CuZyqxzD4/82+eqm+VepVjxfCOD/rH/jxoY9RVWWLwSQjf4d86/01Wd45XGrd/0KhSOrDB+m33tKDEsCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAzD+q9i3I9cDwkgAAAABJRU5ErkJggg==",
        }}
      /> */}
      <Text style={styles.korean}>베테남</Text>
      <Spacer height={20} />
      <Text style={styles.vietnamese}>Việt Nam</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    borderWidth: 3,
    borderColor: colors.palette.green900,
    padding: 24,
    width: 0.7 * ScreenDimension.WIDTH,
    alignItems: "center",
    marginRight: 20,
  },
  korean: {
    fontSize: 24,
    fontFamily: "Jost-Bold",
  },
  vietnamese: {
    fontSize: 20,
  },
  image: {
    width: "90%",
    height: 0.4 * ScreenDimension.HEIGHT,
    resizeMode: "contain",
  },
})
