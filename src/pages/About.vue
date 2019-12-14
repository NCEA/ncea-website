<template>
  <Layout :currentPage="'about'">
    <h1>{{ $page.about.title }}</h1>
    <p>{{ $page.about.description }}</p>
    <section class="people">
      <ul class="people-list">
        <li class="person" v-for="person in people" :key="person.name">
          <div class="person-image">
            <img :src="person.image" :alt="person.name">
          </div>
          <div class="person-details">
            <h6>{{ person.name }}</h6>
            <p>{{ person.description }}</p>
          </div>
        </li>
      </ul>
    </section>
  </Layout>
</template>

<page-query>
query {
  about(id: "about") {
    title
    description
    people {
      name
      description
      image
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
