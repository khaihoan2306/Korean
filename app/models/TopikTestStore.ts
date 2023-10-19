import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"
import firestore from "@react-native-firebase/firestore"

export const TopikTestStoreModel = types
  .model("TopikTestStore")
  .props({
    questionList: types.maybe(types.array(types.frozen<any>())),
    sectionList: types.maybe(types.array(types.frozen<any>())),
  })
  .actions(withSetPropAction)
  .actions((store) => ({
    async fetchTopikTest(topikNumber: string) {
      const topikTestCollection = await firestore().collection("topik").doc(topikNumber).get()
      const data = topikTestCollection.data()
      if (data) {
        store.setProp("questionList", data.questions)
        store.setProp("sectionList", data.sections)
      }
    },
  }))
  .views((store) => ({}))

export interface TopikTestStore extends Instance<typeof TopikTestStoreModel> {}
export interface TopikTestStoreSnapshot extends SnapshotOut<typeof TopikTestStoreModel> {}

// @demo remove-file
