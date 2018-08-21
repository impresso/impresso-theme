<template>
<div id="app" class="m-3">
  <h1>Impresso interface elements</h1>
  <router-view/>
</div>
</template>

<script>
import WebFontLoader from 'webfontloader';
import 'dripicons/webfont/webfont.css';

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
</style>
