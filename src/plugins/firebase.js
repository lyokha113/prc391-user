import Vue from 'vue'
import VueFirestore from 'vue-firestore'
import { firebase } from '@firebase/app'
import '@firebase/firestore'

Vue.use(VueFirestore)

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAFrrijRaop6c-_9GWpr4Kj61nc-Mdyjf8',
  authDomain: 'prc391-243518.firebaseapp.com',
  databaseURL: 'https://prc391-243518.firebaseio.com',
  projectId: 'prc391-243518',
  storageBucket: '',
  messagingSenderId: '569202403609',
  appId: '1:569202403609:web:1c49ae247b232a78'
})

export const db = firebaseApp.firestore()
