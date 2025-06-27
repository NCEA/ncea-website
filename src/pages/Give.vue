<template>
  <Layout :showBox="true" :currentPage="parseInt($page.data.id, 10)">

    <h1 class="give-title">{{ $page.data.title }}</h1>
    <h2 class="give-subtitle">{{ $page.data.subtitle }}</h2>
    <div v-html="pageContent"></div>

  </Layout>
</template>

<page-query>
query {
  data: give(id: 4) {
    id
    title
    subtitle
    content
    pdf
  }
}
</page-query>

<script>
export default {
  computed: {
    pageContent() {
      return this.$page.data.content 
        ? this.$page.data.content.replace(/#DONATE_FORM/g, this.$page.data.pdf)
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
.give-title {
  margin: .75em 0 .4em;
}
.give-subtitle {
  font-weight: 500;
  font-size: var(--font-size-h4);
  color: var(--color-neutral-light);
  margin: .4em 0 1.5em;
}
</style>