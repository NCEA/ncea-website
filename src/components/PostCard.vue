<template>
  <g-link
    class="post-card"
    :to="post.path">

    <h4
      class="post-card-title"
      v-html="post.title"/>

    <span class="post-card-meta">
      Posted {{ post.date }}.
      <template v-if="post.timeToRead">
        <strong>{{ post.timeToRead }} min read.</strong>
      </template>
    </span>

    <p
      class="post-card-description"
      v-html="post.description"/>

  </g-link>
</template>

<script>
export default {
  props: ['post'],
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/_variables.scss';

.post-card {
  display: block;
  background: none;
  box-shadow: none;
  padding: 1em 0;
  margin: 1em 0;
  border-bottom: 1px solid rgba($color-neutral-light, .15);

  &-title {
    margin: 0;
  }

  &-meta {
    display: block;
    margin: 1em 0;
    font-size: $font-size-label;
    color: $color-neutral-light;
  }

  &-description {
    margin: 0 0 1em;
    color: $color-neutral-dark;
  }

  &:last-child {
    padding: 1em 0 0;
    margin: 1em 0 0;
    border-bottom: none;
  }
}
</style>
