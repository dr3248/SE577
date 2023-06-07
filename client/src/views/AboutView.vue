<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click='handleSignIn'>Sign-In</button>
    <button @click='handleSignOut'>Sign-out</button>
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  name: 'AboutView',
  props: {
    msg: String
  },

  data() {
    return {
      user: '',
    }
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
    }
  },

  setup() {
    const Vue3GoogleOauth = inject('Vue3GoogleOauth');

    return {
      Vue3GoogleOauth,
    };
  }
}
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
