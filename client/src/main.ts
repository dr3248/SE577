import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiWfa8XE4J9FOFMmT7fBNF4qFTFpus9P8",
  authDomain: "globusvue-c58e2.firebaseapp.com",
  projectId: "globusvue-c58e2",
  storageBucket: "globusvue-c58e2.appspot.com",
  messagingSenderId: "709296887190",
  appId: "1:709296887190:web:711ec022b722db13a0f9b7"
};

initializeApp(firebaseConfig);

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
