<template>
  <div id="app">
    <Appheader></Appheader>
    <router-view></router-view>
  </div>
</template>

<script>
import Appheader from '../src/components/common/Appheader';

export default {
  name: "App",
  components: {
    Appheader
  }
};
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
