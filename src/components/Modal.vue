<template>
  <transition name="modal" v-if="show">
    <div class="modal-mask">
      <div class="modal-wrapper" @click="closeModal">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              default header
            </slot>
            <button class="modal-button" @click="closeModal">
              <span class="entypo-cancel"></span>
            </button>
          </div>

          <div class="modal-body">
            <slot name="body">
              default body
            </slot>
          </div>

        </div> <!-- /.modal-container -->
      </div> <!-- /.modal-wrapper -->
    </div> <!-- /.modal-mask -->
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  data () {
    return {
      id: null,
      show: false
    }
  },
  mounted () {
    this.id = this._uid
  },
  methods: {
    closeModal (event) {
      var classes = ['modal-button', 'entypo-cancel', 'modal-wrapper']
      if (classes.indexOf(event.target.className) !== -1) {
        this.show = false
      }
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/modal.scss';
</style>
