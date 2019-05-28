<template>
  <div id="app">
    <component :is="(this.$route.meta.layout || 'default') + '-layout'">
      <router-view/>
    </component>
  </div>
</template>

<script>
export default {
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
