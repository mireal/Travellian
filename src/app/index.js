// export {default as App} from './App.vue'
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

const app = createApp(App).use(router)

export default app
