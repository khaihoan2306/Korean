import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { api } from "../services/api"
import { withSetPropAction } from "./helpers/withSetPropAction"
import firestore from '@react-native-firebase/firestore'

export const LessonsStoreModel = types
  .model("LessonsStore")
  .props({
    vocabularyList: types.maybe(types.array(types.frozen<any>())),
    koreanTitle: types.maybe(types.string),
    vietnameseTitle: types.maybe(types.string),
    lessonNumber: types.maybe(types.string)
  })
  .actions(withSetPropAction)
  .actions((store) => ({
    async fetchLessons(number: string) {
      const lessonsCollection = await firestore().collection('lessons').doc(number).get()
      const data = lessonsCollection.data()

      if (data) {
        store.setProp("lessonNumber", number)
        store.setProp("vocabularyList", data.vocabulary)
        store.setProp("koreanTitle", data.kTitle)
        store.setProp("vietnameseTitle", data.vTitle)
      }
    },

  }))
  .views((store) => ({


  }))


export interface LessonsStore extends Instance<typeof LessonsStoreModel> { }
export interface LessonsStoreSnapshot extends SnapshotOut<typeof LessonsStoreModel> { }

// @demo remove-file
