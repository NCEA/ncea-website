<template>
  <Layout :showBox="true">

    <section class="error">
      <h1>404</h1>
      <h6>Page Not Found</h6>
      <p>The requested page could not be found, please try again later or check the URL for errors.</p>
      <br>
      <a class="button button-primary" href="/">
        Go home
      </a>
    </section>

  </Layout>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: '404'
    }
  }
}
</script>

<style lang="scss" scoped>
.error {
  display: block;
  max-width: 400px;
  margin: 4em auto;
  text-align: center;
}
.error h1 {
  font-size: 3.653em;
  margin: 0;
}
</style>