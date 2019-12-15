<template>
  <Layout
    :showBox="false"
    :currentPage="parseInt($page.data.id, 10)">

    <section class="splash">
      <img
        :src="$page.data.splash.image"
        alt="Splash background"/>
      <h1>{{ $page.data.splash.heading }}</h1>
      <h6>{{ $page.data.splash.subheading }}</h6>
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
  data: index(id: 0) {
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
