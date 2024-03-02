<template>
  <Layout
    :showBox="true"
    :currentPage="parseInt($page.data.id, 10)">

    <h1 class="news-title">{{ $page.data.title }}</h1>
    <h2 class="news-subtitle">{{ $page.data.subtitle }}</h2>
    <p v-html="$page.data.content"></p>

    <hr class="posts-divider" />

    <section class="posts">
      <h2>Posts</h2>
      <PostCard
        v-for="edge in $page.posts.edges"
        :key="edge.node.id"
        :post="edge.node"/>
    </section>

  </Layout>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        pdf
        ...on Post {
          id
          title
          path
        }
        path
      }
    }
  }
  data: news(id: 3) {
    id
    title
    subtitle
    content
  }
}
</page-query>

<script>
import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    PostCard
  },
  metaInfo () {
    return {
      title: this.$page.data.title
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/_variables.scss';

.news-title {
  margin: .75em 0 .4em;
}
.news-subtitle {
  font-weight: 500;
  font-size: $font-size-h4;
  color: $color-neutral-light;
  margin: .4em 0 1.5em;
}
.posts {
  margin: 0 0 1em;
}
.posts-divider {
  margin: 3em 0;
}
</style>
