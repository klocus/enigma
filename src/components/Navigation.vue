<template>
  <nav class="navigation">
    <ul>
      <router-link v-for="route in this.$router.options.routes" :key="route.path" tag="li" :to="route">
        <a>{{ route.name }}</a>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      currentPage: 0,
      pages: null,
      pagesCount: 0
    }
  },
  mounted () {
    document.addEventListener('keyup', this.switchPage)
    this.pages = this.$router.options.routes
    this.pagesCount = this.pages.length
  },
  methods: {
    switchPage (event) {
      this.currentPage = this.pages.findIndex(this.findCurrentPage)

      if (event.keyCode === 37 && this.currentPage > 0) { // left arrow
        this.$router.push(this.pages[--this.currentPage])
      } else if ([32, 39].indexOf(event.keyCode) !== -1 && this.currentPage < (this.pagesCount - 1)) { // spacebar or right arrow
        this.$router.push(this.pages[++this.currentPage])
      }
    },
    findCurrentPage (item) {
      return item.name === this.$route.name
    }
  }
}
</script>
