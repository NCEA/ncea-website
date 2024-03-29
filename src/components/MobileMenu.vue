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

<style lang="scss" scoped>
@import '~/assets/style/_variables.scss';

.mobile-menu {
  display: block;
  max-width: $max-width - 40px;
  width: calc(100% - 40px);
  z-index: 9;

  &-logo {
    position: absolute;
    background: none;
    box-shadow: none;
    z-index: 99;
    cursor: pointer;

    &-image {
      height: 70px;
      margin: 10px 0;
    }
  }

  &-nav {
    display: block;
    position: absolute;
    height: auto;
    top: -1.5em;
    left: -20px;
    right: -20px;
    background: $color-background-light;
    text-align: center;
    box-shadow: 0 0 0 2px rgba($color-neutral-dark, .1),
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
      transform: translateY(-20px);
    }

    &-list {
      display: inline-block;
      width: 100%;
      max-width: $max-width;
      margin: 140px 0 1em;
    }

    &-item {
      display: block;
      background: none;
      padding: 2em 2.5em;
      font-family: $font-family-heading;
      font-size: $font-size-h5;
      font-weight: 400;
      box-shadow: none;

      &-active {
        font-weight: 700;
      }
    }
  }

  &-toggle {
    position: absolute;
    outline: none;
    right: 0;
    padding: 2em 3em 2em 2em;
    border: none;
    background: none;
    color: $color-accent-dark;
    font: 600 $font-size-p-small $font-family;
    text-transform: uppercase;
    z-index: 99;
    cursor: pointer;

    &::before,
    &::after {
      display: block;
      position: absolute;
      content: '';
      width: 30px;
      height: 2.5px;
      right: 0;
      border-radius: 2px;
      background: $color-accent-dark;
      transition: .2s ease;
    }

    &::before {
      margin: 2px 0 0;
    }

    &::after {
      margin: -4px 0 0;
    }
  }

  &-toggle-active {
    &::before {
      transform: rotate(45deg);
      margin: 10.5px 0 0;
    }

    &::after {
      transform: rotate(-45deg);
      margin: -11.5px 0 0;
    }
  }
}

@media (min-width: 960px) {
  .mobile-menu {
    display: none;
  }
}
</style>
