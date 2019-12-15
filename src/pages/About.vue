<template>
  <Layout
    :showBox="true"
    :currentPage="parseInt($page.data.id, 10)">
    <h1>{{ $page.data.title }}</h1>
    <p>{{ $page.data.description }}</p>

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

</style>
