<template>
  <div id="app">
    <transition name="fade">
      <router-view/>
    </transition>
    <navigation></navigation>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'

export default {
  name: 'App',
  components: { Navigation }
}
</script>

<style lang="scss">
@import './assets/scss/app.scss';
</style>
