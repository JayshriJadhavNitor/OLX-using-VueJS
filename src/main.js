import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import router from './routes'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'bootstrap/dist/css/bootstrap.min.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import store from './store/store'
import Toast, { POSITION } from 'vue-toastification'
import 'vue-toastification/dist/index.css'

// Add FontAwesome icons to library
library.add(faSearch, faUser)

// Create Vue app instance
const app = createApp(App)

// Use plugins
app.component("font-awesome-icon", FontAwesomeIcon)
app.use(router)
app.use(store)
app.use(bootstrap)
app.use(Toast, {
  position: POSITION.TOP_RIGHT,
  // You can add additional options here
})

// Mount the app
app.mount("#app")
