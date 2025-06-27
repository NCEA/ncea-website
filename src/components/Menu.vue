<template>
  <div class="menu">

    <a class="menu-logo" href="/">
      <img class="menu-logo-image" src="/images/uploads/ncea-logo.svg" alt="NCEA">
    </a>

    <div class="menu-nav">
      <nav class="menu-nav-list">
        <a v-for="item in pages" :key="item.id"
          :class="['menu-nav-item', { 'menu-nav-item-active': item.id === currentPage }, { 'menu-nav-item-cta': item.name === 'Give' }]"
          :href="item.url">
          {{ item.name }}
        </a>
      </nav>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    pages: {
      type: Array,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
.menu {
  display: block;
  max-width: var(--max-width);
  width: 100%;
}
.menu::before {
  content: "";
  display: block;
  position: absolute;
  top: -1.5em;
  left: 0;
  right: 0;
  width: 100%;
  height: 150px;
  background: 
    radial-gradient(farthest-corner at top, var(--color-background-dark), transparent);
}
.menu-logo {
  position: absolute;
  background: none;
  box-shadow: none;
  z-index: 99;
  cursor: pointer;
}
.menu-logo-image {
  height: 90px;
}
.menu-nav {
  display: block;
  text-align: right;
}
.menu-nav-list {
  display: inline-block;
  width: 100%;
  max-width: var(--max-width);
}
.menu-nav-item {
  display: inline-block;
  position: relative;
  background: none;
  padding: 2em 1.5em;
  font-size: var(--font-size-h5);
  font-family: var(--font-family-heading);
  font-weight: 600;
  box-shadow: none;
}
.menu-nav-item::after {
  content: '';
  display: block;
  width: 100%;
  height: 2px;
  background: transparent;
}
.menu-nav-item-active::after {
  background: color-mix(in srgb, var(--color-accent-dark) 20%, transparent);
}
.menu-nav-item:hover::after,
.menu-nav-item:focus-visible::after {
  background: var(--color-accent-dark);
}
.menu-nav-item-cta {
  margin-left: 1em;
}
.menu-nav-item-cta::before {
  content: '';
  position: absolute;
  display: block;
  width: 100%;
  height: 50px;
  left: -2px;
  top: 21px;
  border-radius: 12px;
  border: 2px solid color-mix(in srgb, var(--color-accent-dark) 20%, transparent);
  z-index: 0;
}
.menu-nav-item-cta::after {
  background: transparent;
}
.menu-nav-item-cta:hover::before,
.menu-nav-item-cta:focus-visible::before {
  background: color-mix(in srgb, var(--color-accent-dark) 10%, transparent);
}
.menu-nav-item-cta:hover::after,
.menu-nav-item-cta:focus-visible::after {
  background: transparent;
}
.menu .menu-nav-item-active.menu-nav-item-cta::before {
  background: color-mix(in srgb, var(--color-accent-dark) 10%, transparent);
}

@media (max-width: 960px) {
  .menu {
    display: none;
  }
}
</style>
