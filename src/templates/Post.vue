<template>
  <Layout
    :showBox="true"
    :currentPage="parseInt($page.data.id, 10)">

    <section class="status">
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
    </section>

    <article class="post">

      <section class="post-details">
        <h1 class="post-details-title">
          {{ $page.post.title }}
        </h1>
        <span class="post-details-meta">
          Posted {{ $page.post.date }} | 
          <template v-if="$page.post.timeToRead">
            <strong>{{ $page.post.timeToRead }} min read.</strong>
          </template>
        </span>
      </section>

      <section 
        class="post-content" 
        v-html="$page.post.content">
      </section>

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
    margin: 0 1em 0 0;
    padding: 0 2em 0;
    border-left: 1px solid rgba($color-neutral-light, .15);

    p {
      margin: 0;
      font-size: $font-size-label;
      color: $color-neutral-light;
    }
    h5 {
      margin: 0;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
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
  }
}
</style>
