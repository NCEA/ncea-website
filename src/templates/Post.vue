<template>
  <Layout
    :showBox="true"
    :currentPage="parseInt($page.data.id, 10)">

    <div class="status">
      <a
        class="status-back button"
        href="/news">
        <span class="button-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
          </svg>
        </span>
        Go back
      </a>
      <div class="status-info">
        <p>Currently reading:</p>
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
            <strong>{{ $page.post.timeToRead }} min read.</strong>
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
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/_variables.scss';

.status {
  display: flex;
  position: sticky;
  top: 0;
  background: $color-background-light;
  align-items: center;
  padding: 1em 0;
  margin: 0 0 4em;
  box-shadow: 0 1px rgba($color-neutral-light, .15);

  &-back {
    margin: 0 1em 0 0;
  }

  &-info {
    margin: 0 0 0 1em;
    padding: 0 2em 0;
    border: 1px solid rgba($color-neutral-light, .15);
    border-width: 0 0 0 1px;

    p {
      margin: 0;
      font-size: $font-size-label;
      color: $color-neutral-light;
    }
    h6 {
      margin: 0;
    }
  }
}

.post {
  text-align: center;

  &-details {

    &-meta {
      font-size: $font-size-label;
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
    margin: 0 0 2em;
    flex-direction: column;
    box-shadow: none;

    &-info {
      display: none;
    }
  }
}
</style>
