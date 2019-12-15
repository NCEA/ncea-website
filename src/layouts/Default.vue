<template>
  <div id="app">

    <header class="header">
      <a
        class="header-logo"
        href="/">
        <img
          class="header-logo-image"
          src="/images/uploads/ncea-logo.svg"
          alt="NCEA">
      </a>
      <Menu
        :pages="pages"
        :currentPage="currentPage"/>
    </header>

    <main
      :class="{ box: showBox}"
      tabindex="-1">
        <slot/>
    </main>

    <footer class="footer">
      <div class="footer-copyright">
        <span>© {{ new Date().getFullYear() }} NCEA</span><br>
        <span>Developed by 
          <a href="https://natlec.com" target="_blank" rel="noopener noreferrer">Nathan Lecompte</a>
        </span>
      </div>
      <div class="footer-admin">
        <a href="/admin" target="_blank" rel="noopener noreferrer nofollow">Go to Control Panel</a>
      </div>
    </footer>

  </div>
</template>

<script>
import Menu from '~/components/Menu.vue'

export default {
  components: {
    Menu
  },
  props: {
    currentPage: Number,
    showBox: Boolean
  },
  data () {
    return {
      pages: [
        { id: 0, url: '/', name: 'Home' },
        { id: 1, url: '/about', name: 'About' },
        { id: 2, url: '/contact', name: 'Contact' },
        { id: 3, url: '/news', name: 'News' }
      ]
    }
  },
  methods: {
    goHome () {
      window.location = '/'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/_variables.scss';

.header {
  position: relative;
  height: 100px;
  margin: 1.5em 1em 3.5em;
  
  &-logo {
    position: absolute;
    background: none;
    box-shadow: none;
    z-index: 99;
    cursor: pointer;

    &-image {
      height: 90px;
    }
  }
}

.footer {
  height: 150px;
  font-size: $font-size-label;
  color: $color-neutral-light;
  line-height: 1.5;
  padding: 2.5em 0;
  margin: 2.5em 1em;
  text-align: center;
  border-top: 1px solid rgba($color-neutral-light, .15);
}
</style>
