<template>
  <Layout
    :showBox="true"
    :currentPage="parseInt($page.data.id, 10)">

    <h1 class="curriculum-title">{{ $page.data.title }}</h1>
    <h2 class="curriculum-subtitle">{{ $page.data.subtitle }}</h2>
    <div v-html="pageContent"></div>

  </Layout>
</template>

<page-query>
query {
  data: curriculum(id: 5) {
    id
    title
    subtitle
    HGHSpdf
    NBHSpdf
    content
  }
}
</page-query>

<script>
export default {
  computed: {
    pageContent() {
      return this.$page.data.content
        ? this.$page.data.content
          .replace(/#NBHS_CURRICULUM/g, this.$page.data.NBHSpdf)
          .replace(/#HGHS_CURRICULUM/g, this.$page.data.HGHSpdf)
        : "";
    }
  },
  metaInfo() {
    return {
      title: this.$page.data.title
    }
  }
}
</script>

<style scoped>
.curriculum-title {
  margin: .75em 0 .4em;
}
.curriculum-subtitle {
  font-weight: 500;
  font-size: var(--font-size-h4);
  color: var(--color-neutral-light);
  margin: .4em 0 1.5em;
}
</style>