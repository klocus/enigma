<template>
  <div class="container">
    <page-title/>

    <div class="page-content flex-center-v">
      <div class="map-wrapper">
        <div class="actions">
          <button @click="zoomIn()">+</button>
          <button @click="zoomOut()">-</button>
        </div>

        <div class="map-overlay" v-dragscroll>
          <img src="../assets/img/problem-map.png" ref="map" alt="map">
        </div>
      </div>

      <div class="info">Użyj przycisku <strong>+</strong> lub <strong>-</strong> do zmiany powiększenia oraz <strong>kursora</strong> do przesuwania mapy.</div>
    </div>  <!-- /.page-content -->
  </div> <!-- /.contaier -->
</template>

<script>
import { dragscroll } from 'vue-dragscroll'

export default {
  name: 'ProblemMap',
  directives: {
    'dragscroll': dragscroll
  },
  data () {
    return {
      mapSelector: null,
      mapStartWidth: 0
    }
  },
  mounted () {
    this.mapSelector = this.$refs['map']
    this.mapStartWidth = this.$refs['map'].clientWidth
  },
  methods: {
    zoomIn () {
      var currWidth = this.mapSelector.clientWidth
      if (currWidth >= this.mapSelector.naturalWidth) {
        return false
      } else {
        this.mapSelector.style.width = (currWidth + 100) + 'px'
      }
    },
    zoomOut () {
      var currWidth = this.mapSelector.clientWidth
      if (currWidth <= this.mapStartWidth) {
        return false
      } else {
        this.mapSelector.style.width = (currWidth - 100) + 'px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/problem-map.scss';
</style>
