import firebase from 'firebase/app'
import database from 'firebase/database'
import Rebase from 're-base'

// Initialize Firebase
const config = {
    apiKey: "YOUR API",
    authDomain: "YOUR AUTH DOMAIN",
    databaseURL: "YOUR DATABASE URL",
    projectId: "YOUR PROJ ID",
    storageBucket: "YOUR STORAGE BUCKET",
    messagingSenderId: "YOUR MESSAGING SENDER ID"
  };
  const app = firebase.initializeApp(config)
  const db = database(app)

  export default Rebase.createClass(db)