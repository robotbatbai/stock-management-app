// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { firestorePlugin } from 'vuefire'
import './firebase.js'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import moment from 'moment'

Vue.config.productionTip = false

Vue.use(firestorePlugin)
Vue.use(Vuetify)

Vue.filter('formatDate', function (value) {
  if (value) {
    return moment.unix(value).format('YYYY/MM/DD hh:mm')
  }
})

Vue.filter('newline', function (value) {
  console.log(value)
  if (value) {
    return value.replace('<br>', '\n')
  }
})

Vue.filter('getKeyFromValue', function (object, value) {
  return Object.keys(object).find(key => object[key] === value)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify: new Vuetify({
    icons: {
      iconfont: 'md'
    }
  }),
  components: { App },
  template: '<App/>'
})
