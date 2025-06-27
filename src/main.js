// Import main css
import '~/assets/style/_variables.css';
import '~/assets/style/_progress.css';
import '~/assets/style/_fonts.css';
import '~/assets/style/_base.css';
import '~/assets/style/_box.css';
import '~/assets/style/_forms.css';
import '~/assets/style/_buttons.css';

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue';

// Import progress bar
import NProgress from "nprogress";

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {

  // Show progress bar when changing routes
  router.beforeEach((to, from, next) => {
      if (!to.hash && typeof document !== "undefined") {
          NProgress.start()
      }
      next()
  })
  router.afterEach((to, from) => {
      if (!to.hash && typeof document !== "undefined") {
          NProgress.done()
      }
  })

  // Add external Javascript before the closing </body> tag
  head.script.push({
    src: '/admin/netlify.js',
    body: true
  })

  // Add meta tags
  head.meta.push({
    name: 'author',
    content: 'NCEA'
  })
  head.meta.push({
    name: 'keywords',
    content: 'NCEA, Normanhurst, Australia, Christian, Education, Association, religious, school, strategic, challenging, life, jesus, God, students'
  })

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}