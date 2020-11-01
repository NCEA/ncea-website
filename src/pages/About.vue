<template>
  <Layout
    :showBox="true"
    :currentPage="parseInt($page.data.id, 10)">
    <h1>{{ $page.data.title }}</h1>
    <p v-html="$page.data.description"/>

    <section class="people">
      <ul class="people-list">
        <li
          class="person"
          v-for="person in $page.data.people"
          :key="person.name">

          <div class="person-image">
            <img
              :src="person.image"
              :alt="person.name">
          </div>

          <div class="person-details">
            <h6>{{ person.name }}</h6>
            <p>{{ person.description }}</p>
            <blockquote>{{ person.quote }}</blockquote>
          </div>

        </li>
      </ul>
    </section>

  </Layout>
</template>

<page-query>
query {
  data: about(id: 1) {
    id
    title
    description
    people {
      name
      description
      quote
      image
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

<style lang="scss" scoped>
@import '~/assets/style/_variables.scss';

.people {
  &-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
}
.person {
  display: flex;
  align-items: center;
  margin: 1em 0 2em;

  &-image {
    display: block;
    background: $color-accent-light;
    min-width: 150px;
    min-height: 150px;
    width: 150px;
    height: 150px;
    overflow: hidden;
    border-radius: 100%;
    box-shadow: 0 4px 16px rgba($color-neutral-light, .15),
                inset 0 0 0 1px rgba($color-neutral-light, .25);

    img {
      width: 100%;
      height: 100%;
    }
  }
  &-details {
    margin: 0 0 0 2em;
  }
}

@media (max-width: 720px) {
  .person {
    flex-direction: column;

    &-image {
      margin: 1em 0 2em;
    }

    &-details {
      margin: 0;
    }
  }
}
</style>
