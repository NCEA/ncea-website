<template>
  <Layout :currentPage="$page.data.id">

    <h1>{{ $page.data.title }}</h1>

    <div class="posts">
      <PostCard
        v-for="edge in $page.posts.edges"
        :key="edge.node.id"
        :post="edge.node"/>
    </div>

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
        ...on Post {
          id
          title
          path
        }
        path
      }
    }
  }
  data: news(id: "news") {
    id
    title
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

<style lang="scss">

</style>
