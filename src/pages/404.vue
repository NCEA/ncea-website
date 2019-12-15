<template>
  <Layout :showBox="true">

    <center>
      <h1>404</h1>
      <h6>Page Not Found</h6>
      <p>The requested page could not be found, please try again later or check the URL for errors.</p>
      <br>
      <a class="button button-primary" href="/">
        Go home
      </a>
    </center>

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
