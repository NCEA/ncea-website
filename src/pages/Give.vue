<template>
  <Layout
    :showBox="true"
    :currentPage="parseInt($page.data.id, 10)">

    <h1 class="give-title">{{ $page.data.title }}</h1>
    <h2 v-if="$page.data.subtitle" class="give-subtitle">{{ $page.data.subtitle }}</h2>
    <p v-html="pageContent"/>

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
  metaInfo() {
    return {
      title: this.$page.data.title
    }
  },
  computed: {
    pageContent() {
      return this.$page.data.content.replace("#DONATE_FORM", this.$page.data.pdf);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/_variables.scss';

.give-title {
  margin: .75em 0 .4em;
}
.give-subtitle {
  font-weight: 500;
  font-size: $font-size-h4;
  color: $color-neutral-light;
  margin: .4em 0 1.5em;
}
</style>