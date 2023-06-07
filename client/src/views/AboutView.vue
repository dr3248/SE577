<template>
  <div class="about">
    <h1>This is an about page</h1><br>
    <button @click="signInWithGoogle">Show my google details</button>

    <div v-if="user">
      <h2>Welcome, {{ user.displayName }}</h2>
      <p>Email: {{ user.email }}</p>
      <p>Profile Picture:</p>
      <img :src="user.photoURL" alt="Profile Picture">
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";

const user = ref(null);

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      user.value = result.user;
    })
    .catch((error) => {
      console.error(error);
    });
};

onMounted(() => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      user.value = user;
    } else {
      // User is signed out
      user.value = null;
    }
  });
});
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
