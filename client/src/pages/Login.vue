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
    <div id="google-signin"></div> <!-- Add this element for Google Sign-In button -->

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
    <button @click='handleSignIn'>Sign In</button>
    <button @click='handleSignOut' >Sign Out</button>
  </div>
</template>


<script>

export default {
  data() {
    return {
      loginEmail: '',
      loginPassword: '',
      registerEmail: '',
      registerPassword: '',
      isNewUser: false,
      googleClientId: '530316403367-rps07n9reu3b2ot08a5gaupgs5m2f2m4.apps.googleusercontent.com', // Replace with your actual Client ID
    };
  },
  mounted() {
    this.initializeGoogleSignIn();
  },
  methods: {
    async handleSignIn() {
      try {
        const googleUser = await this.$gAuth.signIn();
        // console.log(this.$gAuth.signIn);

        if (!googleUser) {
          return null;
        }

        this.user = googleUser.getBasicProfile().getEmail();
      } catch (error) {
        console.log(error);
        return null;
      }
      
    },
    async handleSignOut() {
      try {
        await this.$gAuth.signOut();
        // console.log(this.$gAuth.signOut);

        this.user = '';
      } catch (error) {
        console.log(error);
      }
    },

    initializeGoogleSignIn() {
      const googleSignInConfig = {
        client_id: this.googleClientId,
      };

      // Initialize Google Sign-In
      window.google.accounts.id.initialize(googleSignInConfig);
      window.google.accounts.id.renderButton(
        document.getElementById('google-signin'), // Render the button inside the element with id 'google-signin'
        {
          theme: 'filled_black', // Customize the button theme
          size: 'large', // Customize the button size
          text: 'Continue with Google', // Customize the button text
          shape: 'rectangular', // Customize the button shape
        }
      );

      window.google.accounts.id.prompt(notification => {
        if (notification.isNotDisplayed()) {
          console.log('Google Sign-In prompt not displayed');
        } else {
          console.log('Google Sign-In prompt displayed');
        }
      });
    },
    login() {
    // Check if the entered email and password match the stored credentials
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (
      this.loginEmail === storedEmail &&
      this.loginPassword === storedPassword
    ) {
      alert('Login successful');
      // Redirect to homepage.vue
      this.$router.push('/home');
    } else {
      alert('Invalid email or password');
    }
  },
  register() {
    // Store the entered email and password as credentials
    localStorage.setItem('email', this.registerEmail);
    localStorage.setItem('password', this.registerPassword);

    alert('Registration successful');
    // Redirect to homepage.vue
    // this.$router.push('/homepage');
  },
  toggleRegisterForm() {
    this.isNewUser = !this.isNewUser;
  },
  },
  // setup() {
  //   //const Vue3GoogleOauth = inject('Vue3GoogleOauth');

  //   return {
  //     Vue3GoogleOauth,
  //   };
  // }
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

