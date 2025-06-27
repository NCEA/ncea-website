<template>
  <div id="app">

    <header class="header">
      <Menu :pages="pages" :currentPage="currentPage"></Menu>
      <MobileMenu :pages="pages" :currentPage="currentPage"></MobileMenu>
    </header>

    <main :class="{ box: showBox }" tabindex="-1">
      <slot />
    </main>

    <footer class="footer">
      <div class="footer-copyright">
        <span>© {{ new Date().getFullYear() }} NCEA</span><br>
      </div>
      <div class="footer-admin">
        <a href="/admin" target="_blank" rel="noopener noreferrer nofollow">Go to Control Panel</a>
      </div>
    </footer>

  </div>
</template>

<script>
import Menu from '~/components/Menu.vue';
import MobileMenu from '~/components/MobileMenu.vue';

export default {
  components: {
    Menu,
    MobileMenu
  },
  props: {
    currentPage: Number,
    showBox: Boolean
  },
  data() {
    return {
      pages: [
        { id: 0, url: '/', name: 'Home' },
        { id: 1, url: '/about', name: 'About' },
        { id: 2, url: '/contact', name: 'Contact' },
        { id: 5, url: '/curriculum', name: 'Curriculum' },
        { id: 3, url: '/news', name: 'News' },
        { id: 4, url: '/give', name: 'Give' },
      ]
    }
  },
  methods: {
    goHome() {
      window.location = '/'
    }
  }
}
</script>

<style scoped>
.header {
  position: relative;
  height: 100px;
  margin: 1.5em 20px 3.5em;
}

.footer {
  height: 150px;
  font-size: var(--font-size-label);
  color: var(--color-neutral-light);
  line-height: 1.5;
  padding: 2.5em 0;
  margin: 2.5em 1em;
  text-align: center;
}

@media (max-width: 720px) {
  .header {
    margin: 1.5em 20px 2.5em;
  }
}
</style>
