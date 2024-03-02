<template>
  <component :is="post.pdf ? 'a' : 'g-link'" class="post-card" :href="post.pdf ? post.pdf : ''"
    :to="post.pdf ? post.pdf : post.path">

    <h4 class="post-card-title" v-html="post.title" />

    <span class="post-card-meta">
      Posted {{ post.date }}
      <template v-if="post.timeToRead && !post.pdf">
        | <strong>{{ post.timeToRead }} min read</strong>
      </template>
      <div v-if="post.pdf" class="post-card-meta-pdf">
        | <strong>PDF</strong>
      </div>
    </span>

    <p class="post-card-description" v-html="post.description" />

  </component>
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

  &-title {
    display: inline-block;
    margin: 0;

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      background: rgba($color-neutral-dark, .1);
    }
  }

  &:hover {
    .post-card-title::after {
      background: $color-accent-dark;
    }
  }

  &-meta {
    display: block;
    margin: 0.5em 0 1em;
    font-weight: 400;
    font-size: $font-size-label;
    color: $color-neutral-light;

    strong {
      font-weight: 500;
      color: $color-neutral-light;
    }

    &-pdf {
      display: inline;

      strong {
        font-weight: 700;
        color: $color-accent-dark;
      }
    }
  }

  &-description {
    margin: 0 0 1em;
    color: $color-neutral-light;
  }

  &:last-child {
    padding: 1em 0 0;
    margin: 1em 0 0;
    border-bottom: none;
  }
}
</style>
