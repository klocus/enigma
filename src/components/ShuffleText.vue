<template>
  <div class="shuffle-text">
    <slot></slot>
  </div>
</template>

<script>
import '../assets/js/descrambler.js'

export default {
  name: 'ShuffleText',
  mounted () {
    $(this.$el).scramble(3000)
  }
}
</script>
