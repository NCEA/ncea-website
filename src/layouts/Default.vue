<template>
  <div id="app">

    <header class="header">
      <div class="header-left">
        <img src="/images/uploads/logo.svg" alt="NCEA">
      </div>
      <div class="header-right">
        <button class="menu-button">
          Menu
        </button>
      </div>
    </header>

    <main class="main">
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
export default {
  props: {
    currentPage: String
  }
}
</script>

<style lang="scss">

</style>
