<template>
  <Layout :currentPage="'contact'">
    <h1>{{ $page.contact.title }}</h1>
    <p>{{ $page.contact.description }}</p>

    <section class="columns">

      <section class="columns-left" v-if="$page.contact.contacts | $page.contact.blurb">
        <section class="contacts" v-if="$page.contact.contacts">
          <h5>Contacts</h5>
          <div class="contacts-list">
            <ul>
              <li v-for="contact in $page.contact.contacts" :key="contact.email">
                <h6>{{ contact.name }}</h6>
                <p>{{ contact.position }}</p>
                <a :href="'mailto:' + contact.email" title="Click to open your default email application and create a new email to this contact">
                  {{ contact.email }}
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section class="blurb" v-if="$page.contact.blurb">
          <h5>{{ $page.contact.blurb.heading }}</h5>
          <p>{{ $page.contact.blurb.body }}</p>
        </section>
      </section>

      <section class="columns-right">
        <form name="contact" method="POST" data-netlify="true">
          <div class="form-group">
            <label for="name">Name: </label>
            <input type="text" id="name" name="name" autocomplete="name">
          </div>
          <div class="form-group">
            <label for="email">Email: </label>
            <input type="email" id="email" name="email" required="true" aria-required="true" autocomplete="email">
          </div>
          <div class="form-group">
            <label for="message">Message:</label>
            <textarea id="message" name="message" required="true" aria-required="true" rows="5"></textarea>
          </div>
          <div class="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </section>

    </section>
  </Layout>
</template>

<page-query>
query {
  contact(id: "contact") {
    title
    description
    contacts {
      name
      position
      email
    }
    blurb {
      heading
      body
    }
  }
}
</page-query>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.contact.title
    }
  }
}
</script>
