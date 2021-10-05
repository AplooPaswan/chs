import React from 'react'
import firebase from 'firebase/app'
import { firebaseApp } from '../firebase'

const App = () => {

  const usersCollection = firebaseApp.firestore().collection("users")

  return (
    <div>
      App
    </div>
  )
}

export default App
App