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
      <p class="splash-subheading">{{ $page.data.splash.subheading }}</p>
      <a
        class="button button-primary"
        href="#"
        title="Click to play welcome video"
        @click="videoVisible=true">
        {{ $page.data.splash.button.name }}
        <span class="button-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 -960 960 960">
            <path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
          </svg>
        </span>
      </a>
    </section>

    <div v-if="videoVisible" class="modal">
      <div class="modal-backdrop" @click="videoVisible=false"></div>
      <div class="modal-content">
        <div class="modal-content-top">
          <a class="modal-button-top-close" href="#" title="Close welcome video" @click="videoVisible=false">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 -960 960 960">
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
            </svg>
          </a>
        </div>
        <div class="modal-content-video">
          <video controls autoplay>
            <source :src="$page.data.splash.welcomevideo" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>

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
      welcomevideo
      button {
        name        
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
  },
  data () {
    return {
      videoVisible: false
    }
  }
}
</script>

<style scoped>
.splash {
  position: relative;
  height: 250px;
  text-align: center;
  padding: 0 1em;
  margin: calc(50vh - (255px + 1.5em)) auto calc(50vh - (200px + 5em));
  max-width: 700px;
}
.splash-image {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}
.splash-heading {
  font-size: 5.202em;
  text-transform: unset;
  margin: 0;
}
.splash-subheading {
  color: var(--color-neutral-light);
  font-size: var(--font-size-h4);
  font-weight: 400;
  line-height: 1.5;
  text-transform: unset;
  margin: .5em 0 2em;
}

.modal {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  padding: 1em;
  background: transparent;
  z-index: 99;
}
.modal-backdrop {
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: color-mix(in srgb, var(--color-background-light) 50%, transparent);
  backdrop-filter: blur(8px);
  z-index: -1;
}
.modal-content {
  max-width: var(--max-width);
}
.modal-content-video video {
  width: 100%;
  max-width: var(--max-width);
  border-radius: 10px;
}
.modal-content-top {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 0 1em;
}
.modal-button-top-close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 6px;
  background: transparent;
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--color-accent-dark) 20%, transparent);
}
.modal-button-top-close:hover {
  background: color-mix(in srgb, var(--color-accent-dark) 10%, transparent);
}
.modal-button-top-close:focus,
.modal-button-top-close:active {
  background: color-mix(in srgb, var(--color-accent-dark) 10%, transparent);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--color-accent-dark) 20%, transparent);
}
.modal-button-top-close svg {
  fill: var(--color-accent-dark);
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
