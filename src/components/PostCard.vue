<template>
  <a class="post-card" :href="post.pdf ? post.pdf : post.path">

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

  </a>
</template>

<script>
export default {
  props: ['post'],
}
</script>

<style scoped>
.post-card {
  display: block;
  background: none;
  box-shadow: none;
  padding: 1em 0;
  margin: 1em 0;
}
.post-card-title {
  display: inline-block;
  margin: 0;
}
.post-card-title::after {
  content: '';
  display: block;
  width: 100%;
  height: 2px;
  background: color-mix(in srgb, var(--color-neutral-dark) 10%, transparent);
}
.post-card:hover .post-card-title::after {
  background: var(--color-accent-dark);
}
.post-card-meta {
  display: block;
  margin: 0.5em 0 1em;
  font-weight: 400;
  font-size: var(--font-size-label);
  color: var(--color-neutral-light);
}
.post-card-meta strong {
  font-weight: 500;
  color: var(--color-neutral-light);
}
.post-card-meta-pdf {
  display: inline;
}
.post-card-meta-pdf strong {
  font-weight: 700;
  color: var(--color-accent-dark);
}
.post-card-description {
  margin: 0 0 1em;
  color: var(--color-neutral-light);
}
.post-card:last-child {
  padding: 1em 0 0;
  margin: 1em 0 0;
  border-bottom: none;
}
</style>
