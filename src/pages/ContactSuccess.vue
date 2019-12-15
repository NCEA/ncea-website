<template>
  <Layout :showBox="true">

    <center>
      <h1>Success!</h1>
      <p>Your message has been sent, we'll try to get back to you as soon as we can!</p>
      <br>
      <a class="button button-primary" href="/contact">
        Go back
      </a>
    </center>

  </Layout>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: 'Contact Success'
    }
  }
}
</script>
