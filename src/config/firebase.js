import Firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAJw_YPrL_QTtSHwObUZ2j9d8kDm55UAo",
  authDomain: "music-streaming-464f2.firebaseapp.com",
  databaseURL: "https://music-streaming-464f2-default-rtdb.firebaseio.com",
  projectId: "music-streaming-464f2",
  storageBucket: "music-streaming-464f2.appspot.com",
  messagingSenderId: "791641750214",
  appId: "1:791641750214:web:ab2917ced67145a39175c7"
};
  
const firebase = Firebase.initializeApp(firebaseConfig);

export { firebase };
