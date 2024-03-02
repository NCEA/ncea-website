<template>
  <Layout
    :showBox="true"
    :currentPage="parseInt($page.data.id, 10)">
    <h1 class="contact-title">{{ $page.data.title }}</h1>
    <h2 v-if="$page.data.subtitle" class="contact-subtitle">{{ $page.data.subtitle }}</h2>
    <p v-html="$page.data.content"></p>

    <div class="columns">

      <div class="columns-left">

        <section class="contacts">
          <h4 class="contacts-heading">Contacts</h4>
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
          <h4>{{ $page.data.blurb.heading }}</h4>
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
          data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact">
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
    subtitle
    content
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

.contact-title {
  margin: .75em 0 .4em;
}
.contact-subtitle {
  font-weight: 500;
  font-size: $font-size-h4;
  color: $color-neutral-light;
  margin: .4em 0 1.5em;
}

.columns {
  display: flex;
  margin: 3em 0 0;

  &-left {
    max-width: 300px;
    margin: 0 3em 0 0;
    padding: 1em 3em 1em 0;
    border: 2px solid rgba($color-neutral-light, .1);
    border-width: 0 2px 0 0;

    .contacts {
      margin: 0 0 2em;

      &-heading {
        margin: 0 0 1em;
      }

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

    .form,
    #message {
      max-width: 600px;
    }
  }
}

@media (max-width: 720px) {
  .columns {
    flex-direction: column;
    align-items: stretch;

    &-left {
      border-width: 0 0 2px;
      margin: 0 0 3em;
      padding: 1em 0 3em;
      max-width: none;
    }
  }
}
</style>
