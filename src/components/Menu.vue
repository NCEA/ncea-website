<template>
  <section class="menu">

    <transition name="menu-nav" mode="out-in">
      <div
        v-if="visible"
        class="menu-nav"
        :aria-visible="visible">
        <nav class="menu-nav-list">
          <a
            v-for="item in pages"
            :key="item.id"
            :class="['menu-nav-item', { 'menu-nav-item-active': item.id === currentPage}]"
            :href="item.url">
            {{ item.name }}
          </a>
        </nav>
      </div>
    </transition>

    <button
      @click="visible=!visible"
      class="menu-toggle"
      :title="visible ? 'Close menu' : 'Open menu'">
      {{ visible ? 'Close' : 'Menu' }}
    </button>

  </section>
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

<style lang="scss" scoped>
@import '~/assets/style/_variables.scss';

.menu {
  &-nav {
    display: block;
    position: fixed;
    height: 150px;
    top: 0;
    left: 0;
    right: 0;
    background: $color-background-light;
    text-align: center;
    box-shadow: 0 0 0 1px rgba($color-neutral-dark, .1),
                0 4px 8px rgba($color-neutral-dark, .05),
                0 8px 36px rgba($color-neutral-dark, .05);
    overflow: hidden;
    z-index: 9;

    &-enter-active, 
    &-leave-active {
      transition: .2s ease;
    }
    &-enter, 
    &-leave-to  {
      opacity: 0;
      height: 0;
      padding-top: 1em;
    }

    &-list {
      display: inline-block;
      width: 100%;
      max-width: $max-width;
      margin: 1.5em 1em;
    }

    &-item {
      display: inline-block;
      background: none;
      padding: 2em 2.5em;
      font-size: $font-size-h5;
      font-weight: 400;
      text-transform: uppercase;
      border: 1px solid rgba(0, 0, 0, 0);
      box-shadow: none;

      &-active {
        font-weight: 600;
        border-image: radial-gradient(rgba($color-neutral-dark, .15), rgba(0, 0, 0, 0)) 1 100%;
      }
    }
  }

  &-toggle {
    position: absolute;
    right: 0;
    z-index: 99;
  }
}
</style>
