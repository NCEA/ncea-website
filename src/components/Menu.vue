<template>
  <div class="menu">

    <a class="menu-logo" href="/">
      <img
        class="menu-logo-image"
        src="/images/uploads/ncea-logo.svg"
        alt="NCEA">
    </a>

      <div
        class="menu-nav">
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

<style lang="scss" scoped>
@import '~/assets/style/_variables.scss';

.menu {
  display: block;
  max-width: $max-width;
  width: 100%;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: -1.5em;
    left: 0;
    right: 0;
    width: 100%;
    height: 150px;
    background: radial-gradient(farthest-corner at top, $color-background-dark, transparent);
  }

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

  &-nav {
    display: block;
    text-align: right;

    &-list {
      display: inline-block;
      width: 100%;
      max-width: $max-width;
    }

    &-item {
      display: inline-block;
      position: relative;
      background: none;
      padding: 2em 1.5em;
      font-size: $font-size-h5;
      font-family: $font-family-heading;
      font-weight: 600;
      box-shadow: none;

      &::after {
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        background: transparent;
      }

      &-active {

        &::after {
          background: rgba($color-accent-dark, .2);
        }
      }

      &:hover,
      &:focus-visible {
        &::after {
          background: $color-accent-dark;
        }
      }
    }
  }
}

@media (max-width: 960px) {
  .menu {
    display: none;
  }
}
</style>
