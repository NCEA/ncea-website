<template>
  <g-link
    class="post-card"
    :to="post.path">

    <h2
      class="post-card-title"
      v-html="post.title"/>

    <p
      class="post-card-description"
      v-html="post.description"/>

    <span class="post-card-meta">
      Posted {{ post.date }}.
      <template v-if="post.timeToRead">
        <strong>{{ post.timeToRead }} min read.</strong>
      </template>
    </span>

  </g-link>
</template>

<script>
export default {
  props: ['post'],
}
</script>

<style lang="scss" scoped>

</style>
