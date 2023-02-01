import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
// importare icone di fontawesome
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './store'
import App from './App.vue'

library.add(
    // aggiungere icone
    faLocationDot,
    faQuoteLeft,
    faEye,
    faInstagram,
    faTwitter,
    faFacebookF
)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')