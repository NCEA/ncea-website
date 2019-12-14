<template>
  <Layout :currentPage="'home'">
    <h1>{{ $page.index.splash.heading }}</h1>
    <h2>{{ $page.index.splash.subheading }}</h2>
    <a class="button-primary" :href="$page.index.splash.button.url">
      {{ $page.index.splash.button.name }}
    </a>
  </Layout>
</template>

<page-query>
query {
  index(id: "index") {
    id
    title
    image
    splash { 
      heading
      subheading
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
      title: this.$page.index.title
    }
  }
}
</script>
