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
        id: process.env.TYPEKIT_ID,
      },
    });
  },
};
</script>

<style>
#app {
  margin: 1em;
}
</style>
