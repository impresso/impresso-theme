<template>
<div id="app">
  <h1>Impresso interface elements</h1>
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
