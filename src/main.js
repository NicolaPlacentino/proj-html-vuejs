import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
// importare icone di fontawesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './store'
import App from './App.vue'

library.add(
    // aggiungere icone
)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')