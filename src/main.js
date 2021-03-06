// Import main css
import '~/assets/style/index.scss'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {

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