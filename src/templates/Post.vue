<template>
  <Layout
    :showBox="true"
    :currentPage="parseInt($page.data.id, 10)">

    <div class="status">
      <a
        class="status-back button"
        href="/news"
        title="Go back to News">
        <span class="button-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
          </svg>
        </span>
      </a>
      <div class="status-info">
        <h6>{{ $page.post.title }}</h6>
      </div>
    </div>

    <article class="post">

      <div class="post-details">
        <h1 class="post-details-title">
          {{ $page.post.title }}
        </h1>
        <span class="post-details-meta">
          Posted {{ $page.post.date }} | 
          <template v-if="$page.post.timeToRead">
            <strong>{{ $page.post.timeToRead }} min read</strong>
          </template>
        </span>
      </div>

      <div 
        class="post-content" 
        v-html="$page.post.content">
      </div>

    </article>

  </Layout>
</template>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    description
    content
    pdf
  }
  data: news(id: 3) {
    id
  }
}
</page-query>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description
        }
      ]
    }
  },
  mounted() {
    if (this.$page.post.pdf) {
      window.location = this.$page.post.pdf;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/_variables.scss';

.status {
  display: flex;
  position: sticky;
  top: 0;
  background: rgba($color-background-light, .8);
  backdrop-filter: blur(16px);
  align-items: center;
  padding: 1.5em 0;
  margin: -1em -1em 4em;
  box-shadow: 0 2px rgba($color-neutral-light, .1);

  &-back {
    width: 55px;
    height: 55px;
    padding: 12px;
    border-radius: 100%;
    margin: 0 1em 0 0;
    box-shadow: none;

    .button-icon {
      margin: -1px 0 0 -1px;
    }

    .button-icon,
    .button-icon svg {
      width: 32px;
      height: 32px;
    }

    &:focus,
    &:active {
      box-shadow: inset 0 0 0 2px $color-accent-dark,
                  0 2px 8px rgba($color-accent-dark, .15);
    }
  }

  &-info {
    margin: 0 0 0 1em;

    h6 {
      margin: 0;
      text-transform: none;
      font-size: $font-size-h3;
      color: $color-accent-dark;
    }
  }
}

.post {
  text-align: center;

  &-details {

    &-title {
      margin: 0 0 0.5em;
    }

    &-meta {
      margin: 0;
      font-size: $font-size-p-small;
      color: $color-neutral-light;
    }
  }

  &-content {
    display: inline-block;
    margin: 2em 0;
    text-align: left;
    max-width: 800px;
    width: 100%;
    overflow: hidden;
  }
}

@media (max-width: 720px) {
  .status {
    position: relative;
    margin: 0 0 1em;
    padding: 1em 0;
    flex-direction: column;
    box-shadow: none;

    &-info {
      display: none;
    }
  }
  .post-details {

    &-title {
      font-size: $font-size-h3;
    }

    &-meta {
      font-size: $font-size-label;
    }
  }
}
</style>
