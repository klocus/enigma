<template>
  <div class="container">
    <page-title/>

    <div class="page-content flex-center-vh">
        <div class="gallery" v-dragscroll>
            <div class="photo">
                <img src="../assets/img/photo-1.jpg">
            </div>
            <div class="photo">
                <img src="../assets/img/photo-2.jpg">
            </div>
            <div class="photo">
                <img src="../assets/img/photo-3.jpg">
            </div>
            <div class="photo">
                <img src="../assets/img/photo-4.jpg">
            </div>
            <div class="photo">
                <img src="../assets/img/photo-5.jpg">
            </div>
            <div class="photo">
                <img src="../assets/img/photo-6.jpg">
            </div>
        </div>
    </div> <!-- /.page-content -->
  </div> <!-- /.container -->
</template>

<script>
import { dragscroll } from 'vue-dragscroll'

export default {
  name: 'Ideation',
  directives: {
    'dragscroll': dragscroll
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/ideation.scss';
</style>
