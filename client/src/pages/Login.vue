<template>
  <div>
    <h2>Login</h2>
    <form v-if="!isNewUser" @submit.prevent="login">
      <label>
        Email:
        <input type="email" v-model="loginEmail" required>
      </label>
      <br>
      <label>
        Password:
        <input type="password" v-model="loginPassword" required>
      </label>
      <br>
      <button type="submit">Login</button>
      <button type="button" @click="toggleRegisterForm">New User</button>
    </form>

    <h2 v-if="isNewUser">Register</h2>
    <form v-if="isNewUser" @submit.prevent="register">
      <label>
        Email:
        <input type="email" v-model="registerEmail" required>
      </label>
      <br>
      <label>
        Password:
        <input type="password" v-model="registerPassword" required>
      </label>
      <br>
      <button type="submit">Register</button>
      <button type="button" @click="toggleRegisterForm">Back to Login</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const isNewUser = ref(false);
    const loginEmail = ref('');
    const loginPassword = ref('');
    const registerEmail = ref('');
    const registerPassword = ref('');
    const router = useRouter();

    const login = () => {
      // Check if the entered email and password match the stored credentials
      const storedEmail = localStorage.getItem('email');
      const storedPassword = localStorage.getItem('password');

      if (loginEmail.value === storedEmail && loginPassword.value === storedPassword) {
        alert('Login successful');
        // Redirect to homepage.vue
        router.push('/home');
      } else {
        alert('Invalid email or password');
      }
    };

    const register = () => {
      // Store the entered email and password as credentials
      localStorage.setItem('email', registerEmail.value);
      localStorage.setItem('password', registerPassword.value);

      alert('Registration successful');
      toggleRegisterForm();
    };

    const toggleRegisterForm = () => {
      isNewUser.value = !isNewUser.value;
    };

    return {
      isNewUser,
      loginEmail,
      loginPassword,
      registerEmail,
      registerPassword,
      login,
      register,
      toggleRegisterForm
    };
  }
};
</script>

<style>
button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
