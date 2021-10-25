<template>
  <Navbar />

  <div class="container mt-3">
    <router-view/>
  </div>


</template>

<script>

import Navbar from './components/Navbar'

export default {
  components: {
    Navbar,
  }
  
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #6c9bca;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #305274;
}

#nav a.router-link-exact-active {
  color: #dee2da;
}
</style>
