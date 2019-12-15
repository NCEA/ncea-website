<template>
  <Layout>
    <article class="post">

      <section class="post-details">
        <h1 class="post-details-title">
          {{ $page.post.title }}
        </h1>
        <span class="post-details-meta">
          Posted {{ $page.post.date }}.
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

<style lang="scss">

</style>
