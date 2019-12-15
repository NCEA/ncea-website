<template>
  <Layout
    :showBox="true"
    :currentPage="parseInt($page.data.id, 10)">
    <h1>{{ $page.data.title }}</h1>
    <p>{{ $page.data.description }}</p>

    <div class="columns">

      <div class="columns-left">

        <section class="contacts">
          <h5>Contacts</h5>
          <ul class="contacts-list">
            <li
              class="contacts-list-item"
              v-for="contact in $page.data.contacts"
              :key="contact.email">
              <h6>{{ contact.name }}</h6>
              <p>{{ contact.position }}</p>
              <a
                :href="'mailto:' + contact.email"
                title="Click to open your default email application and create a new email to this contact">
                {{ contact.email }}
              </a>
            </li>
          </ul>
        </section>

        <section class="blurb">
          <h5>{{ $page.data.blurb.heading }}</h5>
          <p>{{ $page.data.blurb.body }}</p>
        </section>

      </div>

      <div class="columns-right">
        <form
          class="form"
          name="contact"
          method="POST"
          action="/contact-success"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          data-netlify-recaptcha="true">
          <input name="bot-field" hidden="true">
          <div class="form-group">
            <label
              ref="nameLabel"
              class="label"
              for="name">Name: </label>
            <input
              @focus="$refs.nameLabel.classList.add('label-focused')"
              @blur="$refs.nameLabel.classList.remove('label-focused')"
              class="input"
              type="text"
              id="name"
              name="name"
              autocomplete="name"
              placeholder="Enter your full name...">
          </div>
          <div class="form-group">
            <label
              ref="emailLabel"
              class="label"
              for="email">Email: </label>
            <input
              @focus="$refs.emailLabel.classList.add('label-focused')"
              @blur="$refs.emailLabel.classList.remove('label-focused')"
              class="input"
              type="email"
              id="email"
              name="email"
              required="true"
              autocomplete="email"
              placeholder="Enter your email address...">
          </div>
          <div class="form-group">
            <label
              ref="messageLabel"
              class="label"
              for="message">Message:</label>
            <textarea
              @focus="$refs.messageLabel.classList.add('label-focused')"
              @blur="$refs.messageLabel.classList.remove('label-focused')"
              class="input input-textarea"
              id="message"
              name="message"
              required="true"
              rows="5"
              placeholder="Enter your message..."></textarea>
          </div>
          <div class="form-group">
            <label
              id="recaptcha-label"
              class="label">
              reCAPTCHA:
            </label>
            <div
              aria-describedby="recaptcha-label"
              data-netlify-recaptcha="true">
            </div>
          </div>
          <div class="form-group">
            <button
              class="button button-primary"
              type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>

    </div>
  </Layout>
</template>

<page-query>
query {
  data: contact(id: 2) {
    id
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
      title: this.$page.data.title
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/_variables.scss';

.columns {
  display: flex;
  margin: 1em 0 0;

  &-left {
    max-width: 300px;
    margin: 0 2em 0 0;
    padding: 1em 2em 1em 0;
    border-right: 1px solid rgba($color-neutral-light, .15);

    .contacts {
      margin: 0 0 2em;

      &-list {
        list-style: none;
        padding: 0;
        margin: 1.5em 0;

        &-item {
          margin: 0 0 2em;
        }
      }
    }
  }
  &-right {
    flex: 1;

    .form {
      max-width: 500px;
    }
  }
}
</style>
