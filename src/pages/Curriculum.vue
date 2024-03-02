<template>
  <Layout
    :showBox="true"
    :currentPage="parseInt($page.data.id, 10)">

    <h1 class="curriculum-title">{{ $page.data.title }}</h1>
    <h2 v-if="$page.data.subtitle" class="curriculum-subtitle">{{ $page.data.subtitle }}</h2>
    <p v-html="$page.data.content"></p>

  </Layout>
</template>

<page-query>
query {
  data: curriculum(id: 5) {
    id
    title
    subtitle
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.data.title
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/_variables.scss';

.curriculum-title {
  margin: .75em 0 .4em;
}
.curriculum-subtitle {
  font-weight: 500;
  font-size: $font-size-h4;
  color: $color-neutral-light;
  margin: .4em 0 1.5em;
}
</style>