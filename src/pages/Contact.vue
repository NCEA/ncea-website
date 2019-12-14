<template>
  <Layout :currentPage="'contact'">

    <!-- List posts -->
    <div class="posts">
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
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
}
</page-query>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.index.title
    }
  }
}
</script>
