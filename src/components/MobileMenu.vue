<template>
  <div
    :class="['mobile-menu', { 'menu-active': visible }]">

    <a class="mobile-menu-logo" href="/">
      <img
        class="mobile-menu-logo-image"
        src="/images/uploads/ncea-logo.svg"
        alt="NCEA">
    </a>

    <transition name="mobile-menu-nav" mode="out-in">
      <div
        v-if="visible"
        class="mobile-menu-nav"
        :aria-visible="visible">
        <nav class="mobile-menu-nav-list">
          <a
            v-for="item in pages"
            :key="item.id"
            :class="['mobile-menu-nav-item', { 'mobile-menu-nav-item-active': item.id === currentPage}]"
            :href="item.url">
            {{ item.name }}
          </a>
        </nav>
      </div>
    </transition>

    <button
      @click="visible=!visible"
      :class="['mobile-menu-toggle', { 'mobile-menu-toggle-active': visible }]"
      :title="visible ? 'Close menu' : 'Open menu'">
      {{ visible ? 'Close' : 'Menu' }}
    </button>

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
  },
  data () {
    return {
      visible: false
    }
  }
}
</script>

<style scoped>
.mobile-menu {
  display: block;
  max-width: calc(var(--max-width) - 40px);
  width: calc(100% - 40px);
  z-index: 9;
}
.mobile-menu-logo {
  position: absolute;
  background: none;
  box-shadow: none;
  z-index: 99;
  cursor: pointer;
}
.mobile-menu-logo-image {
  height: 70px;
  margin: 10px 0;
}
.mobile-menu-nav {
  display: block;
  position: absolute;
  height: auto;
  top: -1.5em;
  left: -20px;
  right: -20px;
  background: var(--color-background-light);
  text-align: center;
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--color-neutral-dark) 10%, transparent),
              0 4px 8px color-mix(in srgb, var(--color-neutral-dark) 5%, transparent),
              0 8px 36px color-mix(in srgb, var(--color-neutral-dark) 5%, transparent);
  overflow: hidden;
  z-index: 9;
}
.mobile-menu-nav-enter-active, 
.mobile-menu-nav-leave-active {
  transition: .2s ease;
}
.mobile-menu-nav-enter, 
.mobile-menu-nav-leave-to  {
  opacity: 0;
  transform: translateY(-20px);
}
.mobile-menu-nav-list {
  display: inline-block;
  width: 100%;
  max-width: var(--max-width);
  margin: 140px 0 1em;
}
.mobile-menu-nav-item {
  display: block;
  background: none;
  padding: 2em 2.5em;
  font-family: var(--font-family-heading);
  font-size: var(--font-size-h5);
  font-weight: 400;
  box-shadow: none;
}
.mobile-menu-nav-item-active {
  font-weight: 700;
}
.mobile-menu-toggle {
  position: absolute;
  outline: none;
  right: 0;
  padding: 2em 3em 2em 2em;
  border: none;
  background: none;
  color: var(--color-accent-dark);
  font: 600 var(--font-size-p-small) var(--font-family);
  text-transform: uppercase;
  z-index: 99;
  cursor: pointer;
}
.mobile-menu-toggle::before,
.mobile-menu-toggle::after {
  display: block;
  position: absolute;
  content: '';
  width: 30px;
  height: 2.5px;
  right: 0;
  border-radius: 2px;
  background: var(--color-accent-dark);
  transition: .2s ease;
}
.mobile-menu-toggle::before {
  margin: 2px 0 0;
}
.mobile-menu-toggle::after {
  margin: -4px 0 0;
}
.mobile-menu-toggle-active::before {
  transform: rotate(45deg);
  margin: 10.5px 0 0;
}
.mobile-menu-toggle-active::after {
  transform: rotate(-45deg);
  margin: -11.5px 0 0;
}

@media (min-width: 960px) {
  .mobile-menu {
    display: none;
  }
}
</style>
