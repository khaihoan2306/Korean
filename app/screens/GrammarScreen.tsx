import { View, StyleSheet, FlatList, Image } from "react-native"
import React from "react"
import { Header, Spacer, Text } from "app/components"
import { colors } from "app/theme"
import { useStores } from "app/models"
import { useSafeAreaInsetsStyle } from "app/utils/useSafeAreaInsetsStyle"
import { BannerAd, BannerAdSize, TestIds } from "react-native-google-mobile-ads"

const adUnitId = __DEV__ ? TestIds.BANNER : "ca-app-pub-4650295610990607/8879295705"

export const GrammarScreen = () => {
  const {
    lessonsStore: { grammarList },
  } = useStores()
  const containerInsets = useSafeAreaInsetsStyle(["top", "bottom"])

  const Grammar = (props: any) => {
    const { kTitle, vTitle, content, example, image } = props

    return (
      <>
        {(kTitle || vTitle) && (
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{`● ${kTitle}  ${vTitle}`}</Text>
            <Spacer width={10} />
          </View>
        )}
        <Spacer height={10} />

        <Text style={styles.content}>{content}</Text>

        {image && <Image style={styles.image} source={{ uri: image }} />}

        <Spacer height={10} />
        {example?.length > 0 && (
          <View style={styles.exampleContainer}>
            <FlatList
              scrollEnabled={false}
              data={example}
              renderItem={({ item }) => {
                return (
                  <View style={styles.row}>
                    {item.korean && <Text style={styles.example}>{item.korean}</Text>}
                    {item.vietnamese && <Text style={styles.example}>{item.vietnamese}</Text>}
                  </View>
                )
              }}
            />
          </View>
        )}
        <Spacer height={10} />
      </>
    )
  }

  return (
    <View style={containerInsets}>
      <Header title="Ngữ pháp" />
      <Spacer height={10} />
      <View style={styles.bannerAd}>
        <BannerAd
          unitId={adUnitId}
          size={BannerAdSize.BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.flatList}
          showsVerticalScrollIndicator={false}
          data={grammarList}
          renderItem={({ item, index }) => {
            return (
              <Grammar
                index={index}
                kTitle={item.kTitle}
                vTitle={item.vTitle}
                content={item.content}
                example={item.example}
                image={item.image}
              />
            )
          }}
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontFamily: "NotoSerif_Condensed-Bold",
    color: colors.palette.green800,
  },
  titleContainer: {
    flexDirection: "row",
  },
  exampleContainer: {
    backgroundColor: colors.palette.green300,
    padding: 10,
    borderRadius: 15,
  },
  content: {
    fontFamily: "NotoSerif_Condensed-SemiBold",
    textAlign: "justify",
  },
  example: {
    fontFamily: "NotoSerif_Condensed-SemiBold",
    color: colors.palette.green1000,
    flex: 1,
    marginHorizontal: 10,
  },
  row: {
    flexDirection: "row",
  },
  flatList: {
    paddingBottom: 300,
  },
  bannerAd: {
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
})
