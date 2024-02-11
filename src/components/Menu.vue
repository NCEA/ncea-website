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
  z-index: 9;

  &::before {
    content: "";
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 150px;
    background: linear-gradient($color-background-dark, transparent);
  }

  &-active {
    position: fixed;
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
      padding: 2em 2.5em;
      font-size: $font-size-h5;
      font-weight: 600;
      text-transform: uppercase;
      border: 1px solid rgba(0, 0, 0, 0);
      box-shadow: none;

      &::after {
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        background: $color-accent-light;
      }

      &-active {

        &::after {
          background: currentColor;
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
