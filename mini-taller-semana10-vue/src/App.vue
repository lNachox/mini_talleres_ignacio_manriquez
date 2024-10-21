<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Inicio"/>
</template>

<script>
import Home from './views/Home.vue';
import Route1 from './views/Route1.vue';
import Route2 from './views/Route2.vue';
import Route3 from './views/Route3.vue';
import Route4 from './views/Route4.vue';
import Route5 from './views/Route5.vue';

export default {
  name: 'App',
  components: {
    Home,
    Route1,
    Route2,
    Route3,
    Route4,
    Route5
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
