<template>
  <div id="app">
    <main>
      <neon-view></neon-view>
    </main>
  </div>
</template>

<script>
import neonView from '@/components/NeonView'
export default {
  name: 'app',
  components: {
    neonView
  }
}
</script>

<style>
html, body {
  margin: 0;
  height: 100%;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}

main {
  min-height: 100%;
}

</style>
