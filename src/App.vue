<template>
  <div class="app">
    <AppHeader></AppHeader>
    <div id="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/common/Appheader.vue';
export default {
  components: {
    AppHeader,
  },
};
</script>

<style>
@import './css/reset.css';
@import './css/common.css';
</style>