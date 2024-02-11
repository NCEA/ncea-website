<template>
  <Layout
    :showBox="false"
    :currentPage="parseInt($page.data.id, 10)">

    <section class="splash">
      <picture>
        <source
          media="(max-width: 900px)"
          :srcset="$page.data.splash.smallimage">
        <img
          class="splash-image"
          :src="$page.data.splash.largeimage"
          alt="Splash background">
      </picture>
      <h1 class="splash-heading">{{ $page.data.splash.heading }}</h1>
      <h5 class="splash-subheading">{{ $page.data.splash.subheading }}</h5>
      <a
        class="button button-primary"
        :href="$page.data.splash.button.url">
        {{ $page.data.splash.button.name }}
        <span class="button-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
          </svg>
        </span>
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
      largeimage
      smallimage
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
      title: this.$page.data.title,
      meta: [
        {
          name: 'description',
          content: 'Formed in 1991 with the objective of providing a high standard of Christian Education in local state high schools.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/_variables.scss';

.splash {
  position: relative;
  height: 250px;
  text-align: center;
  padding: 0 1em;
  margin: calc(50vh - (225px + 1.5em)) auto calc(50vh - (45px + 5em));
  max-width: 600px;

  &-image {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  &-heading {
    font-size: 5.202em;
    text-transform: unset;
    margin: 0;
  }

  &-subheading {
    color: $color-neutral-light;
    font-weight: 400;
    line-height: 1.5;
    text-transform: unset;
    margin: .5em 0 2em;
  }
}

@media (max-width: 900px) {
  .splash-image {
    width: auto;
  }
}

@media (max-width: 720px) {
  .splash-heading {
    font-size: 3.653em;
  }
}
</style>
