export const environment = {
  production: true
  var firebaseConfig = {
    apiKey: "AIzaSyAicK7nM4jQI3yy7UeaZVvU2pWKfA-yqIk",
    authDomain: "todolist-app-a5b65.firebaseapp.com",
    databaseURL: "https://todolist-app-a5b65-default-rtdb.firebaseio.com",
    projectId: "todolist-app-a5b65",
    storageBucket: "todolist-app-a5b65.appspot.com",
    messagingSenderId: "774018972976",
    appId: "1:774018972976:web:316e21ec78265a58341cf5",
    measurementId: "G-7Z2MSKPFFS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
};
