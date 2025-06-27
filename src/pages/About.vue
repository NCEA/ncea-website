<template>
  <Layout
    :showBox="true"
    :currentPage="parseInt($page.data.id, 10)">

    <h1>{{ $page.data.title }}</h1>
    <div v-html="$page.data.content"></div>

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
    content
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

<style scoped>
.people {
  margin: 3em 0 0;
}
.people-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.person {
  display: flex;
  align-items: center;
  margin: 1em 0 2em;
}
.person-image {
  display: block;
  background: var(--color-accent-light);
  min-width: 150px;
  min-height: 150px;
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 100%;
  box-shadow: 0 4px 16px color-mix(in srgb, var(--color-neutral-light) 15%, transparent),
              inset 0 0 0 1px color-mix(in srgb, var(--color-neutral-light) 25%, transparent);
}
.person-image img {
  width: 100%;
  height: 100%;
}
.person-details {
  margin: 0 0 0 2em;
}

@media (max-width: 720px) {
  .person {
    flex-direction: column;
  }
  .person-image {
    margin: 1em 0 2em;
  }
  .person-details {
    margin: 0;
  }
}
</style>
