import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"
import firestore from "@react-native-firebase/firestore"

export const TopikTestStoreModel = types
  .model("TopikTestStore")
  .props({
    questionList: types.maybe(types.array(types.frozen<any>())),
    sectionList: types.maybe(types.array(types.frozen<any>())),
    answerList: types.maybe(types.array(types.frozen<any>())),
    listening: types.maybe(types.string),
    scores: types.maybe(types.number),
    level: types.maybe(types.number),
  })
  .actions(withSetPropAction)
  .actions((store) => ({
    async fetchTopikTest(topikNumber: string) {
      const topikTestCollection = await firestore().collection("topik").doc(topikNumber).get()
      const data = topikTestCollection.data()
      if (data) {
        store.setProp("questionList", data.questions)
        store.setProp("sectionList", data.sections)
        store.setProp("listening", data.listening)
        const tmp = []
        for (let i = 1; i <= 70; i++) {
          tmp.push({ key: i, value: "" })
        }
        store.setProp("answerList", tmp)
        return true
      }
      return false
    },
    setAnswer(key: number, value: string) {
      const newList = store.answerList.map((obj) => {
        if (obj.key === key) {
          return { ...obj, value: value }
        }
        return obj
      })

      store.setProp("answerList", newList)
    },
    checkAnswer() {
      let scores = 0
      store.answerList.map((e, index) => {
        if (e.value === store.questionList[index].correctAnswer)
          scores = scores + store.questionList[index].point
      })
      store.setProp("scores", scores)
      if (scores >= 140) store.setProp("level", 2)
      else if (scores >= 80) store.setProp("level", 1)
      else store.setProp("level", 0)
    },
  }))
  .views((store) => ({}))

export interface TopikTestStore extends Instance<typeof TopikTestStoreModel> {}
export interface TopikTestStoreSnapshot extends SnapshotOut<typeof TopikTestStoreModel> {}

// @demo remove-file
