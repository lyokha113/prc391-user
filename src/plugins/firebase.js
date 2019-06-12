import Vue from 'vue'
import VueFirestore from 'vue-firestore'
import { firebase } from '@firebase/app'
import '@firebase/firestore'

Vue.use(VueFirestore)

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDLq7b_dC-VX2dcJf-Z2RMdws6-skkxGhA',
  authDomain: 't-door-243518.firebaseapp.com',
  databaseURL: 'https://t-door-243518.firebaseio.com',
  projectId: 't-door-243518',
  storageBucket: 't-door-243518.appspot.com',
  messagingSenderId: '623288961829',
  appId: '1:623288961829:web:1b857761ec3259d0'
})

export const db = firebaseApp.firestore()
