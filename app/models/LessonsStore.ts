import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"
import firestore from '@react-native-firebase/firestore'
import { shuffleArray } from "app/utils/shuffleArray"

export const LessonsStoreModel = types
  .model("LessonsStore")
  .props({
    vocabularyList: types.maybe(types.array(types.frozen<any>())),
    grammarList: types.maybe(types.array(types.frozen<any>())),
    lessonNumber: types.maybe(types.string),
    question: types.maybe(types.frozen<any>())
  })
  .actions(withSetPropAction)
  .actions((store) => ({
    async fetchLessons(number: string) {
      const lessonsCollection = await firestore().collection('lessons').doc(number).get()
      const data = lessonsCollection.data()

      if (data) {
        store.setProp("lessonNumber", number)
        store.setProp("vocabularyList", data.vocabulary)
        store.setProp("grammarList", data.grammar)
      }
    },
    shuffleQuestions() {
      let tmpQuestion = []
      store.vocabularyList.map(e => {
        tmpQuestion = tmpQuestion.concat(e.content)
      })
      const shuffledQuestions = shuffleArray(tmpQuestion)
      let question = { answers: [], correctAnswer: undefined }
      for (let i = 0; i < 4; i++) {
        question.answers.push(shuffledQuestions[i])
      }
      const tmpNumber = Math.floor(Math.random() * 4)
      question.correctAnswer = shuffledQuestions[tmpNumber]
      store.setProp("question", question)

    }
  }))
  .views((store) => ({


  }))


export interface LessonsStore extends Instance<typeof LessonsStoreModel> { }
export interface LessonsStoreSnapshot extends SnapshotOut<typeof LessonsStoreModel> { }

// @demo remove-file
