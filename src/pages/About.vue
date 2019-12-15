<template>
  <Layout :currentPage="$page.data.id">
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
            <quote>{{ person.quote }}</quote>
          </div>

        </li>
      </ul>
    </section>

  </Layout>
</template>

<page-query>
query {
  data: about(id: "about") {
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

<style lang="scss">

</style>
