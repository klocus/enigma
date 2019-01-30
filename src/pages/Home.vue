<template>
  <div class="container flex-center-vh">
    <h1 class="title"><shuffle-text>{{ title }}</shuffle-text></h1>
    <hr>
    <h2 class="subtitle">{{ subtitle }}</h2>

    <router-link :to="{ name: 'EmpathyMap' }" class="play">
      <span class="entypo-play"></span>
    </router-link>
  </div>
</template>

<script>
import ShuffleText from '@/components/ShuffleText'

export default {
  name: 'Home',
  components: { ShuffleText },
  data () {
    return {
      title: 'Dlaczego studenci nie chodzą do muzeów?',
      subtitle: 'Design Thinking na przykładzie Muzeum Enigmy'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/home.scss';
</style>
