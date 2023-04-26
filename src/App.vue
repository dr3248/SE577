<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Africa from './pages/Africa.vue'
import America from './pages/America.vue'
import Asia from './pages/Asia.vue'
import Europe from './pages/Europe.vue'
import Oceania from './pages/Oceania.vue'
import ThirdPage from './pages/Login.vue'

</script>

<template>
  
  <header>
    <!-- <nav> -->
    <!-- <div class="container-fluid"> -->
    <div class="navbar navbar-expand-md navbar-dark">
        <RouterLink to="/home"><img  class="logo" src="../public/earth.png" alt=""></RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item"><RouterLink class="nav-link" to="/home">Home</RouterLink></li>

            <li class="nav-item dropdown">
              <RouterLink class="nav-link dropdown-toggle" href="#" role="button" id="navbarDropdown"
                          data-bs-toggle="dropdown" aria-expanded="false" aria-haspopup="true" to="/">
                          Trips
              </RouterLink>
                              
              <div class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                    <RouterLink class="dropdown-item nav-link" to="/africa">Africa</RouterLink>
                    <RouterLink class="dropdown-item nav-link" to="/america">America</RouterLink>
                    <RouterLink class="dropdown-item nav-link" to="/asia">Asia</RouterLink>
                    <RouterLink class="dropdown-item nav-link" to="/europe">Europe</RouterLink>
                    <RouterLink class="dropdown-item nav-link" to="/oceania">Oceania</RouterLink>
              </div> 
            </li>

            <li class="nav-item"><RouterLink class="nav-link" to="/about">About us</RouterLink></li>
            <li class="nav-item"><RouterLink class="nav-link" to="/maps">Maps</RouterLink></li>
          </ul>
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><RouterLink class="nav-link account" to="/login">LogIn</RouterLink></li>
          </ul>
        </div>

        <!-- </div> -->
    <!-- </nav> -->
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  /* margin: 0 auto 2rem; */
  padding: 0 2rem;
  display: block;
  height: 3rem;
}

.logo:hover {
  /* opacity: 0.5; */
  transform: scale(1.1);
}

/* NAVBAR */
/* .navbar-expand-md .navbar-nav .nav-link.active{ */
  /* color: var(--color-text); */
/* } */

/* nav { */
.navbar {
  width: 100%;
  font-size: 16px;
  text-align: left;
  /* margin-top: 2rem; */
  margin-top: 0;
  /* background-color:#1F2328; */
  background-color: #282A3A;
  height: 4.5rem;
  /* padding: 1rem 0 1.5rem; */
  /* position: fixed; */
  /* top: 0; */
}

/* nav a.router-link-exact-active { */
.navbar a.router-link-exact-active {
  color: var(--color-text); 
}

nav a.router-link-exact-active:hover {
  background-color: var(--color-text);
}

.navbar .nav-item {
  padding: 0 1rem;
}

.navbar .nav-link {
  color: #FFC600;
  font-size: large;
}

.navbar .nav-link:hover {
  /* background-color: #444; */
  transform: scale(1.1);
  /* color: #FFE833; */
}
/* nav a { */
.navbar a {
  /* float: left; */
  /* display: inline-block; */
  /* padding: 0.5rem 2rem; */
  border-left: 1px solid var(--color-border);
  text-align: left;
}

/* nav a.account { */
.navbar a.account {
  /* float: right; */
  /* display: inline-block; */
  /* padding: 0.5rem 2rem; */
  border-left: 1px solid var(--color-border);
  text-align: left;
}

.navbar .collapse {
  background-color: #282A3A;
}

.dropdown .dropdown-menu {
  background-color: #282A3A;
}

</style>
