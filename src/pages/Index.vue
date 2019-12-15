<template>
  <Layout :currentPage="$page.data.id">

    <section
      class="splash"
      :style="{ background: 'url(' + $page.data.splash.image + ')' }">
      <h1>{{ $page.data.splash.heading }}</h1>
      <h2>{{ $page.data.splash.subheading }}</h2>
      <a
        class="button button-primary"
        :href="$page.data.splash.button.url">
        {{ $page.data.splash.button.name }}
      </a>
    </section>

  </Layout>
</template>

<page-query>
query {
  data: index(id: "index") {
    id
    title
    splash { 
      heading
      subheading
      image
      button {
        name
        url
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.data.title
    }
  }
}
</script>

<style lang="scss">

</style>
