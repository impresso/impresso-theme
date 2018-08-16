<template>
<div id="app">
  <img src="./assets/logo.png">
  <router-view/>
</div>
</template>

<script>
import WebFontLoader from 'webfontloader';

export default {
  name: 'App',
  created() {
    WebFontLoader.load({
      typekit: {
        id: 'egx1cmg',
      },
    });
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
